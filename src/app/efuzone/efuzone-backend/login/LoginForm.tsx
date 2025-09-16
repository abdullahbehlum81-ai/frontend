"use client";
import { LoginFormFields } from "@/config/FormFields/Login";
import { LoginSchema } from "@/config/FormValidation/Login";
import { DynamicFormRenderer } from "@/helpers/form";
import { LoginInterface } from "@/types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { BiLogIn } from "react-icons/bi";

const DEFAULT_VALUES: LoginInterface = {
  email: "",
  password: "",
};
function LoginForm() {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<LoginInterface>({
    resolver: yupResolver(LoginSchema),
    defaultValues: DEFAULT_VALUES,
  });
  const loginFields = useMemo(() => {
    return LoginFormFields();
  }, []);

  const handleLoginForm = (data: LoginInterface) => {
    console.log("Login....", data);
    reset(DEFAULT_VALUES);
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
          className="bs-btn bs-btn-primary auth-item-wrap auth-submit-btn"
        >
          <BiLogIn /> Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
