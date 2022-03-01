import React from "react";
import { Card } from "@material-ui/core";
import { LibraryBooks } from "@mui/icons-material";
export default function CardRes(s){
        return(
            <div className="item">
                  <Card className="Card1">
                    <h4>{s.title}</h4>
                    <p>
                      {s.name}{" "}
                      <a href={s.link} target="_blank">
                        <LibraryBooks/>
                      </a>
                    </p>
                  </Card>
            </div>
        );
}