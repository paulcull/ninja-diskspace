exports.menu = {
  "contents":[
    { "type": "paragraph", "text": "Welcome to the Disk Space driver."},
    { "type": "paragraph", "text": "for example for my mac the filter is s2 for the main drive in theory you could mount other network drives and monitor those too \n\r e.g. my macbook is 0s2 \n\r e.g. my NB is 0p2"},
    { "type": "input_field_text", "field_name": "disk_string", "value": "", "label": "Disk to Monitor", "required": true},
    { "type": "submit", "name": "Save disk to monitor", "rpc_method": "echo" },
  ]
};

exports.echo = {
  "contents":[
    { "type": "paragraph", "text": "You have stored the disk string below in your config"}
  ]
};