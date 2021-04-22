<p align="center">
  <img width="250" height="250" src="profileimage3.png">
</p>

## About me

languages:
English(fluent), German(native)

IT Skills:
Python, JavaScript, Java, Php, MySQL, Debian Linux, Html & Css, Web Application Penetration Testing

### Education Details

Gymnasium Rahlstedt, Hamburg (currently)
<!-- Load Stripe.js on your website. -->
<script src="https://js.stripe.com/v3"></script>

<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->
<button
  style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
  id="checkout-button-price_1Ij3mEENLxa8CsJG5FDIM73P"
  role="link"
  type="button"
>
  Checkout
</button>

<div id="error-message"></div>

<script>
(function() {
  var stripe = Stripe('pk_test_51Ij3jhENLxa8CsJGARLgxIOEHTjYktQMDGklLYS13BwvVXdMTtCeG1nKR3fpv7XmR80kHaQwRBjbLl4FknsDFHEX00LoUwM5Gk');

  var checkoutButton = document.getElementById('checkout-button-price_1Ij3mEENLxa8CsJG5FDIM73P');
  checkoutButton.addEventListener('click', function () {
    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1Ij3mEENLxa8CsJG5FDIM73P', quantity: 1}],
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://stripe.com/docs/payments/checkout/fulfill-orders
       */
      successUrl: 'https://your-website.com/success',
      cancelUrl: 'https://your-website.com/canceled',
    })
    .then(function (result) {
      if (result.error) {
        /*
         * If `redirectToCheckout` fails due to a browser or network
         * error, display the localized error message to your customer.
         */
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();
</script>
