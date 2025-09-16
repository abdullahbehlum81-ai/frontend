import { IMAGES_FOLDER_PATH } from "@/constant/constant";
import Image from "next/image";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div id="auth-login-page">
      <div className="auth-page-container auth-page-spc ">
        <div className="auth-page-align">
          <div className="card auth-page-card">
            <div className="card_header auth-page-card-header">
              <Image
                src={`${IMAGES_FOLDER_PATH}/auth.png`}
                alt="web application"
                width={200}
                height={200}
                className="auth-page-image"
              />
            </div>
            <div className="card_content">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
