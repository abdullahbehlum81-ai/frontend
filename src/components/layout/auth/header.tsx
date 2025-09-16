import AppLogo from "../AppLogo";
function LoginHeaderPage() {
  return (
    <header id="auth-header">
      <div className="auth-header-container">
        <div className="auth-page-align">
          <AppLogo width={230} height={91} imgClassName="auth-logo" />
        </div>
      </div>
    </header>
  );
}

export default LoginHeaderPage;