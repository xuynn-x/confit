// CapCutResponse.js - chỉ dùng học tập

var body = $response.body;
var obj = JSON.parse(body);

obj.data = obj.data || {};
obj.data.is_vip = true;
obj.data.vip_expired_at = 4070880000; // ngày hết hạn: năm 2099

if (obj.subscription) {
  obj.subscription.status = "active";
  obj.subscription.expiry_date = "2099-12-31T23:59:59Z";
  obj.subscription.is_premium = true;
}

$done({ body: JSON.stringify(obj) });
