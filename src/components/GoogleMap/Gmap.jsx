import React from "react";

export default function Gmap() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.5058962637668!2d-75.75294402516356!3d40.46407177143199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c5d48f084e9047%3A0xbaedf6d781ea2da!2s17%20Fleetwood%20Rd%2C%20Fleetwood%2C%20PA%2019522!5e0!3m2!1sen!2sus!4v1696539933631!5m2!1sen!2sus"
        width="550"
        height="600"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
