import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { initialValues } from '@/helpers/constants';
import { getUser } from '@/services/usersService';
import { validatefield, validateForm } from '@/helpers/validate';
import { useNotification } from '@/components/Notifications/NotificationProvider';
import { updateUser, uploadImage } from '@/services/usersService';
import { useDispatch } from 'react-redux';
import { updateUserData } from '@/redux/user.slice';
import { useNavigate } from 'react-router-dom';

const useProfilePage = () => {
  const user = useSelector((state) => state.currentUser.userData.user);
  const userId = useSelector((state) => state.currentUser.userData.user.id);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState();
  const [form, setForm] = useState(initialValues.profileForm);
  const [errors, setErrors] = useState(initialValues.profileForm);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const dispatchNotif = useNotification();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser(userId);
        const { birthdate, email, id, image, nDni, name, phone } = user;

        setForm({ birthdate, email, id, image, nDni, name, phone });
      } catch (error) {
        setFormError(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    let { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    const error = validatefield(name, value);

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { ...form };
    delete data.id;

    if (!data.birthdate) data.birthdate = null;

    const formErrors = validateForm(data, 'profileForm');

    setErrors(formErrors);

    const valuesFormError = Object.values(formErrors);
    if (valuesFormError.some((el) => el !== null)) return;

    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        setLoading(true);
        const resp = await uploadImage(formData);
        data.image = resp.secure_url;
      } catch (error) {
        setFormError(error);
      } finally {
        setLoading(false);
      }
    }

    try {
      setLoading(true);
      const user = await updateUser(userId, data);
      delete user.appointments;
      dispatch(updateUserData(user));

      dispatchNotif({
        type: 'SUCCESS',
        message: 'Perfil Modificado',
      });

      navigate('/');
    } catch (error) {
      setFormError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    form,
    errors,
    selectedFile,
    preview,
    formError,
    loading,
    setFormError,
    onSelectFile,
    handleChange,
    handleSubmit,
  };
};
export default useProfilePage;
