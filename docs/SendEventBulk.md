# raven.SendEventBulk

## Properties

| Name      | Type                            | Description                  | Notes |
| --------- | ------------------------------- | ---------------------------- | ----- |
| **event** | **String**                      | name of the event to be sent |
| **batch** | **[[SendEvent]](SendEvent.md)** |                              |

## For Example:

```json
{
  "event": "test",
  "batch": [
    {
      "user": {
        "mobile": "9974064196",
        "email": "ps31ps@gmail.com"
      },
      "data": {
        "sms": true,
        "email": true,
        "client_name": "UrbanGabru",
        "client_logo": "https://s3.us-east-1.amazonaws.com/logourls/client_logos/URBANGABRU_prod_logo_file.png",
        "customer_name": "Sabi Masih",
        "order_id": "74421",
        "order_date": "07-12-2021",
        "customer_address": "Bara Bazar Punjabi Line, No, Shillong - 793001",
        "customer_phone": "08837760363",
        "payment_type": "COD",
        "products": [
          {
            "name": "Urbangabru Jadibuti hair growth Oil",
            "quantity": 1
          }
        ],
        "product_text": "Urbangabru Jadibuti hair growth Oil,",
        "order_total": "449.0",
        "cod_verification_link": "",
        "arriving_on": "",
        "edd": "",
        "track_code": "amWWvp",
        "awb": "78614457644",
        "tracking_url": "https://wiq.app/amWWvp",
        "courier_name": "Bluedart",
        "delivered_on": "27-12-2021",
        "ndr_verificartion_link": "",
        "attempted_on": "",
        "undelivered_reason": ""
      },
      "override": {
        "email": {
          "from": {
            "name": "UrbanGabru"
          }
        }
      }
    },
    {
      "user": {
        "mobile": "9974064196",
        "email": "ps31ps@gmail.com"
      },
      "data": {
        "sms": true,
        "email": true,
        "client_name": "Lotus Organics",
        "client_logo": "https://wareiq-assets.s3.amazonaws.com/wareiq-logo.png",
        "customer_name": "Nijanthan Elangovan",
        "order_id": "63261",
        "order_date": "07-12-2021",
        "customer_address": "#403 H22 Aishwaryam Towers,East Avenue Road,Korattur, CHENNAI - 600080",
        "customer_phone": "08681828144",
        "payment_type": "prepaid",
        "products": [
          {
            "name": "Precious Brightening Serum - Creme & Facewash Collection - 130 gm",
            "quantity": 1
          },
          {
            "name": "minis123",
            "quantity": 1
          }
        ],
        "product_text": "Precious Brightening Serum - Creme & Facewash Collection - 130 gm,minis123,",
        "order_total": "891.0",
        "cod_verification_link": "",
        "arriving_on": "",
        "edd": "",
        "track_code": "0WX7kk",
        "awb": "2875307720",
        "tracking_url": "https://wiq.app/0WX7kk",
        "courier_name": "Ecom Express",
        "delivered_on": "27-12-2021",
        "ndr_verificartion_link": "",
        "attempted_on": "",
        "undelivered_reason": ""
      },
      "override": {
        "email": {
          "from": {
            "name": "Lotus Organics"
          }
        }
      }
    },
    {
      "user": {
        "email": "ps31ps@gmail.com"
      },
      "data": {
        "sms": true,
        "client_name": "Behir",
        "client_logo": "https://logourls.s3.amazonaws.com/client_logos/logo_behir.png",
        "customer_name": "Singaracharyulu Addanki",
        "order_id": "#BEI13594",
        "order_date": "07-12-2021",
        "customer_address": "9-41,S.N.colony,, Nellutla,  Near STR school Nellutla, JANGAON - 516115",
        "customer_phone": "09247217889",
        "payment_type": "COD",
        "products": [
          {
            "name": "Magic Degreaser Spray - Made in India - Buy 1",
            "quantity": 1
          }
        ],
        "product_text": "Magic Degreaser Spray - Made in India - Buy 1,",
        "order_total": "600.0",
        "cod_verification_link": "",
        "arriving_on": "",
        "edd": "",
        "track_code": "jMZe5l",
        "awb": "78615213983",
        "tracking_url": "https://wiq.app/jMZe5l",
        "courier_name": "Bluedart",
        "delivered_on": "27-12-2021",
        "ndr_verificartion_link": "",
        "attempted_on": "",
        "undelivered_reason": ""
      },
      "override": {
        "email": {
          "from": {
            "name": "Behir"
          }
        }
      }
    }
  ]
}
```
