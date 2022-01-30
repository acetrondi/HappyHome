import Swal from "sweetalert2";

const popupSuccess = (successType, falseLogout) => {
  let title = "";
  if (successType === "new" || falseLogout === false) {
    title = "Great! Your account has been succesfully created.. ";
  } else if (successType === "login") {
    title = "Congrats! Succesfully logged in";
  } else if (successType === "reset") {
    title = "Please Check Your Email to reset your password";
  } else if (successType === "logout" && falseLogout) {
    title = "You are successfully logged out..";
  }
  return Swal.fire({
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 1500,
    padding: "1rem 2rem 3rem",
  });
};

export default popupSuccess;
