# Project Title

BookHaven (An e-commerce website for purchase books and also user can add their own books for sale)

## Description

1. When user will enter to the website they will be able to see the home page where at the very top a header will be there which includes 
   the website logo, search panel, cart logo and signIn button.

2. Just below the header there will be a navbar with includes the link of the pages which are Home, Categories, About, More and Contact.

3. When user click on More they will get a menu there they will see two menu items which are cart and addBook. Inside cart user can see 
   their selected item which they had selected to add into the cart but for that they have to be loggedin otherwise the cart will be show 
   as empty and inside addBook they can add their own book for sale but to do this user must have to be loggedin or else they will be
   redirect to the login page.

4. If user added their own book for sale then they will get accessibility to edit and delete their book (Note: User will have 
   accessibility to edit and delete their own book only) and to edit or delete their own book they have to click on horizontal three 
   dots icon which they can see on their own book only.(Note: To see your own added book you have to go to Categories page and scroll 
   down to the very bottom it is because your book is getting pushed to the array or else you can search your own added book by using 
   book name or the author name from the search panel)

5. To add something to the cart user must have to be loggedin or else they will be redirect to the login page.

6. To login or register user can click on the signIn button which will redirect them to the login page if user already registered before 
   then they can simply login by using their email and password which they had used for the registration and if user doesn't registered 
   before then they have to click on the singUp which will be present below to the submit button of the login page by clicking on signIn 
   user will be redirect to the registration page where User can resister by giving their credentials (name, email, password and 
   confirm password). Once user account created sucessfully then user will be redirect to the login page and after login user will be 
   redirect to the home page.        

7. For purchase books user have to go to the Categories page there user can look for the books and also user can use filter to filter the 
   books to see the books of a specific author or else they can use search panel for searching books by typing book or author name.

8. If user willing to purchase any book then they can add that book to the cart by clicking on the button add to cart and then from the 
   cart they can also increase and decrease the quantity and they can place the oreder by clicking on the paynow button.

9. To know about us user can visit the About page.

10. For contact us user can visit contact page.

11. For the device which have size of 1000px or less than that there is no header we have drawer where user can see all pages name to 
    visit there.

## Tech stacks

* HTML
* CSS
* JavaScript
* React.js
* Redux-toolkit with createAsyncThunk

## Dependencies

* mui/icons-material
* mui/material
* reduxjs/toolkit
* formik
* react-icons
* react-redux
* react-router-dom
* react-slick 
* react-toastify
* slick-carousel
* yup

## Author

* Aditya Shaw

## Deployment Link

* https://bookhaven-gttyinx20-aadimr.vercel.app/

## Data Structure

1. ### User SingUp 
```
{
    user_Name: "",
    email: "",
    password: "",
    confirm_Password: "",
}
```
2. ### User LogIn
```
{
    email: "",
    password: "",
}
```
3. ### AddBook
```
{
  img: "",
  book_Name: "",
  author_Name: "",
  review: "",
  price: "",
}
```
4. ### EditBook
```
{
  img: "existing img URL",
  book_Name: "existing book_Name",
  author_Name: "existing author_Name",
  review: "existing review",
  price: "existing price",
}
```
## APIs

mock API is used for this project (source: https://mockapi.io/) 
   
