This project was used to learn react, redux and typescript. The styled-components, material UI, axios, react-spinners, react-router-dom, react-icons libraries were used.
You can see the result at https://react-redux-for-practice.vercel.app/

Implemented features:
1) Theme switching is implemented.
2) Implemented navigation: 
<br>SignUp -> SinIn; SinIn -> SignUp; SinIn -> SignUp; SinIn -> Main; Home <-> Main <-> About; Main <-> Favourites.
<br>The wrong path will lead to a special fake page.

3) The sign up form with validation is implemented on the start page. To sign up:
- your name must contain more than 3 characters
- your email must follow the pattern #@#.##
- your password must contain at least 1 number and must have a length of 3 or more characters
<br><br>By clicking the button sign up your entered data is displayed under the form.

4) Next step is to click on the text "Already a member? Sign In" or put in url "/signin".
Here is a fake sign in form. After filling it out you will have access to a protected router.

5) The main page is located at https://react-redux-for-practice.vercel.app/main
<br>The axios is used to get movies and display them on page. Redux is used too.
<br>By clicking on the button "REMOVE" the movie is removed from the list. By toggling on the heart the movie is added/removed to/from Favourites. There is also a embedded counter of your favorite movies. By clicking on Favourites you can see your favourite movies and remove them.

6) The fake home page is used just for navigation.
7) The fake about page is used just for navigation too but to reach it you need to log in.

![image](https://user-images.githubusercontent.com/106557182/209785760-213204fe-016c-4f0c-8aaa-15a55e5712bb.png)
