radio.setGroup(73)
basic.showNumber(0)
basic.forever(function () {
    USV.sensorListenerBlock(USV.SensorType.tempC)
})
basic.forever(function () {
    USV.sensorListenerBlock(USV.SensorType.light)
})
basic.forever(function () {
    USV.sensorListenerBlock(USV.SensorType.pH)
})
