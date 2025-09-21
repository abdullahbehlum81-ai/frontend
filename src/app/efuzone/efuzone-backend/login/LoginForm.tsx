"use client";
import { LoginFormFields } from "@/config/FormFields/Login";
import { LoginSchema } from "@/config/FormValidation/Login";
import { ADMIN_AUTH_TOKEN, ADMIN_PATH } from "@/constant";
import { DynamicFormRenderer } from "@/helpers/form";
import { LoginInterface } from "@/types/auth";
import AxiosInstance from "@/lib/axiosClient";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiLogIn } from "react-icons/bi";
import { appConfig } from "@/constant";
import { getCookie } from "@/utils/getCookie";

const DEFAULT_VALUES: LoginInterface = {
  email: "",
  password: "",
};
function LoginForm() {
  const navigate = useRouter();
  const { Root_PAGE_URLS } = appConfig;
  const { DASHBOARD, LOGIN } = Root_PAGE_URLS;
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting, disabled },
  } = useForm<LoginInterface>({
    resolver: yupResolver(LoginSchema),
    defaultValues: DEFAULT_VALUES,
  });
  const loginFields = useMemo(() => {
    return LoginFormFields();
  }, []);

  const handleLoginForm = async (data: LoginInterface) => {
    const adminToken = getCookie(ADMIN_AUTH_TOKEN);
    let Token;
    if (adminToken) {
      navigate.push(DASHBOARD);
    } else {
      const { data: response } = await AxiosInstance.post(
        `${ADMIN_PATH}/login`,
        data
      );
      if (response?.success && response?.token) {
        toast.success(response?.message);
        localStorage.setItem(ADMIN_AUTH_TOKEN, response?.token);
        navigate.push(DASHBOARD);
      } else {
        localStorage.removeItem(ADMIN_AUTH_TOKEN);
        navigate.push(LOGIN);
      }
      reset(DEFAULT_VALUES);
    }
  };
  return (
    <form
      method="post"
      onSubmit={handleSubmit(handleLoginForm)}
      id="submitLoginForm"
    >
      <DynamicFormRenderer
        control={control}
        fields={loginFields}
        instanceId="auth-login-page"
        errors={errors}
      />
      <div className="auth-page-align fm-group">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bs-btn bs-btn-primary auth-item-wrap auth-submit-btn"
        >
          <BiLogIn /> {isSubmitting ? "Logging in..." : <>Login</>}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
