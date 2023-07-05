import * as Yup from "yup";

export const userLogInSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
});

export const checkEmailExistsForLogIn = async (email, password) => {
  try {
    const response = await fetch(`https://64a05a68ed3c41bdd7a73ca1.mockapi.io/userInfo/userInfo?email=${encodeURIComponent(email)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    if (data.length > 0) {
      const user = data[0];
      if (user.password === password) {
    
           const {email, user_Name, addBook, addCart, id} = user
           const userDetails = {email, user_Name, addBook, addCart, id}

            localStorage.setItem("details",JSON.stringify(userDetails))
      }else if(user.password !== password){
           return false
      }
    }else{
      return false
    }

    return true;
  } catch (error) {
    throw new Error('Failed to check credentials');
  }
};

