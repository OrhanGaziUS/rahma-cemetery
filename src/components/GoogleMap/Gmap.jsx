import React from "react";

export default function Gmap() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.5747036249372!2d-75.7549544232854!3d40.462549171432364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c5d48ea1f3f81d%3A0xeb573466d7f5af04!2s313%20Forgedale%20Rd%2C%20Fleetwood%2C%20PA%2019522!5e0!3m2!1sen!2sus!4v1698080963285!5m2!1sen!2sus"
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
