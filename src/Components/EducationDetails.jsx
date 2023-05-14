import React from "react";
import { COLOR, FONTSIZE } from "../Constants/theme";

const EducationDetails = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <p style={{ fontSize: FONTSIZE.xlarge }}>
        &#10145; &#xa0;&#xa0;{props.details.institution}
      </p>
      <div
        style={{
          paddingLeft: "5rem",
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
        }}
      >
        <p>
          <span style={{ color: COLOR.violet, fontWeight: 600 }}>
            {props.details.percentage}
          </span>
          - {props.details.marks}
        </p>
        <p>
          <span style={{ color: COLOR.violet, fontWeight: 600 }}>Year</span> -{" "}
          {props.details.year}
        </p>
      </div>
    </div>
  );
};

export default EducationDetails;
