# modbus-herdsman-converters
Collection of device converters to be used with [modbus2mqtt](https://github.com/Instathings/modbus2mqtt).

## Contribute

Add an entry to `devices.js`. 
Every device can be described with the following structure:

```
{
    model: 'SDM120', // Vendor model number, look on the device for a model number
    vendor: 'Eastron', // Vendor of the device (only used for documentation and startup logging)
    description: Energy meter', // Description of the device, copy from vendor site. (only used for documentation and startup logging)
    supports: 'voltage, current, power', // Actions this device supports (only used for documentation)
    fromModbus: {}, // We will add this later
    toModbus: {}, // Should be empty, unless device can be controlled (e.g. lights, switches).
},
```

### Specify input register addresses

From the device datasheet add the addresses of the input register you want to read data from in the `fromModbus` key this way.

```
{
  ...,
  fromModbus: {
    temperature: {
      address: 30001
    }
  }
}
```

Where the key `temperature` will be the output key to report the value. 
A descriptor like this would generate the following output:
```
{
  temperature: <value read from address>
}
```
