import React from "react";
import { Card } from "@mui/material";
import { School } from "@mui/icons-material";
export default function CardRes(s){
        return(
                  <Card className="Card2 item1 opp">
                    <h5>{s.title}</h5>
                    <p style={{fontSize:"12px"}}>
                      {s.name}{" "}
                      <a href={s.link} target="_blank">
                        <School color="secondary"/>
                      </a>
                    </p>
                  </Card>
        );
}