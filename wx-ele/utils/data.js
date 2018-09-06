function getSData() {
  var data = [
    {
      "id": 1,
      "desc": "罗湖",
      "outboundPassengers": 10,
      "entryPassengers": 10,
      "outboundCars": null,
      "entryCars": null
    },
    {
      "id": 2,
      "desc": "皇岗",
      "outboundPassengers": 20,
      "entryPassengers": 20,
      "outboundCars": 20,
      "entryCars": 20
    },
    {
      "id": 3,
      "desc": "福田",
      "outboundPassengers": 20,
      "entryPassengers": 20,
      "outboundCars": 20,
      "entryCars": 20
    },
    {
      "id": 4,
      "desc": "深圳湾",
      "outboundPassengers": 20,
      "entryPassengers": 20,
      "outboundCars": 20,
      "entryCars": 20
    },
    {
      "id": 5,
      "desc": "文锦渡",
      "outboundPassengers": 10,
      "entryPassengers": 10,
      "outboundCars": 10,
      "entryCars": 10
    },
    {
      "id": 6,
      "desc": "沙头角",
      "outboundPassengers": 10,
      "entryPassengers": 10,
      "outboundCars": 10,
      "entryCars": 10
    },
    {
      "id": 7,
      "desc": "蛇口",
      "outboundPassengers": 20,
      "entryPassengers": 20,
      "outboundCars": null,
      "entryCars": null
    },
    {
      "id": 8,
      "desc": "机场",
      "outboundPassengers": 20,
      "entryPassengers": 20,
      "outboundCars": null,
      "entryCars": null
    }
  ];
  return data || [];
}
module.exports = {
  getSData: getSData
}