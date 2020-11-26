# Filed Payment App

This is a simple credit card payment app with ngRx state management feature.

This project was generated with [Angular CLI] version 10.0.0.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


### Screenshots
# 
![image](https://user-images.githubusercontent.com/48716932/100383944-eb636080-3044-11eb-9984-66efc4bd5eab.png)
Click on the 'Proceed to Pay' button to navigate to payment page.

# 
![image](https://user-images.githubusercontent.com/48716932/100384021-26fe2a80-3045-11eb-840c-31e83b3b28c2.png)
The payment page contains a form on the left side to enter card details and to make the payment. On the right side you will find your saved cards.

You can either select a card from saved cards list or you can add the card details manually which will gets saved after a successful payment.

#
![image](https://user-images.githubusercontent.com/48716932/100384571-785ae980-3046-11eb-9551-2ea77777df4d.png)
The 'Confirm Payment' button will be enabled only if the form is valid.

#
![image](https://user-images.githubusercontent.com/48716932/100384715-d091eb80-3046-11eb-958d-bd1c91e671a9.png)
You will get a notification toast after a successful payment. Here I have used a dummy API from https://fakejson.com/ to make a post request.

#
![image](https://user-images.githubusercontent.com/48716932/100384824-1484f080-3047-11eb-9704-285c2dafafe6.png)
After a successful payment, your card details will be stored and you can see it in the 'Saved Cards' list.

#
![image](https://user-images.githubusercontent.com/48716932/100385141-d1774d00-3047-11eb-9c48-af9e505869af.png)
You can select a card and the card details will be auto populated into the form or you can also delete the card from the Saved Card list.

#
The Saved Card details will be persisted in the ngRx store until the application is reloaded.
