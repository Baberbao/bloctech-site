import React from "react"
import { Helmet } from "react-helmet"

const SeoHelmet = ({ title, description, keywords, structureData }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description ? description : ""} />
      <meta name="title" content={title} />
      <meta charset="utf-8" />
      <meta name="keywords" content={keywords ? keywords : ""} />

      {/* <link rel="canonical" href={window.location.href} /> */}
      <script type="application/ld+json">
        {structureData ? structureData() : ""}
      </script>
    </Helmet>
  )
}

export default SeoHelmet
