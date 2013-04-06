exports.menu = {
  "contents":[
    { "type": "paragraph", "text": "Welcome to the Disk Space driver."},
    { "type": "input_field_text", "field_name": "Disk to monitor (TBD)", "value": "0p2", 
     "label": "Some Text", "placeholder": "placeholder", "required": true},
    { "type": "submit", "name": "Save disk to monitor", "rpc_method": "echo" },
  ]
};

exports.echo = {
  "contents":[
    { "type": "paragraph", "text": "You said"},
  ]
};