import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@material-ui/core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
export default function CardRes(s){
        return(
            <div className="item">
                  <Card className="Card1">
                    <h4>{s.title}</h4>
                    <p>
                      {s.name}{" "}
                      <a href={s.link}>
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </p>
                  </Card>
            </div>
        );
}