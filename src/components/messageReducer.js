export const messageReducer = (state, action) => {
  if (action.type === 'PRODUCT-FILTER') {
    return {
      text:
        'This is a react app for store front where we are able to filter products as per categories.I used react hooks useState and useEffect. Products data are dynamically derived from a separate file.It is responsive.',
      projectLink: (
        <a href="http://storeproduct-filter.s3-website-ap-southeast-2.amazonaws.com/">
          Click here to view
        </a>
      ),
    }
  }

  if (action.type === 'LOGIN') {
    return {
      text:
        'This is a responsive animated login register form . Some features like toggled images are visible only on desktop.I have used react useState hooks and some css animation using keyframe. I have added a password strength recommendation features too in this app.',
      projectLink: (
        <a href="https://paramita-bhattacharya.github.io/react-animated--login-register-passward-strength/">
          Click here to view
        </a>
      ),
    }
  }

  if (action.type === 'PROFILE') {
    return {
      text:
        "This is a profile app, created using react. I have dynamically passed props data from a separate Json file using JavaScript map function. SO I can add as many profiles as I want only by adding data to the Json file. It's modular, I have created 3 components card, profile and profile list and then have output the profile list component on app.js.",
      projectLink: (
        <a href="https://paramita-bhattacharya.github.io/profileApp-react/">
          Click here to view
        </a>
      ),
    }
  }

  if (action.type === 'DOOR') {
    return {
      text:
        "I developed this mobile friendly website where I have used JavaScript constraint validation API, html5 form control both and css pseudo classes to style the error messages. I have used php to submit the contact form and derive a dynamic success message on the same page. and also to redirect the email to client's email.",
      projectLink: (
        <a href="http://www.doorstepcare.info/">Click here to view</a>
      ),
    }
  }

  if (action.type === 'DSJ') {
    return { text: 'this is DSJTimberflooring' }
  }

  if (action.type === 'SHOPPING') {
    return { text: 'this is JAVASCRIPT SHOPPINGCART' }
  }
  return state
}
