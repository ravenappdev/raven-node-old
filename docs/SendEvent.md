# raven.SendEvent

## Properties

| Name           | Type                                  | Description | Notes      |
| -------------- | ------------------------------------- | ----------- | ---------- |
| **event**      | **String**                            |             |
| **user**       | [**User**](User.md)                   |             |
| **data**       | **Object**                            |             | [optional] |
| **scheduleAt** | **String**                            |             | [optional] |
| **override**   | [**EventOverride**](EventOverride.md) |             | [optional] |

## For Example

```json
{
  "event": "test",
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
}
```
