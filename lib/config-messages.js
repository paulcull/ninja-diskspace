exports.menu = {
  "contents":[
    { "type": "paragraph", "text": "Welcome to the Disk Space driver. There are no usable values currently."},
    { "type": "input_field_text", "field_name": "Disk to monitor (TBD)", "value": "", 
     "label": "Some Text", "placeholder": "\\", "required": true},
    { "type": "submit", "name": "Echo back to me", "rpc_method": "echo" },
  ]
};

exports.echo = {
  "contents":[
    { "type": "paragraph", "text": "You said"},
  ]
};