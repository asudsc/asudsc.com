import React from 'react';
import members from "../../models/members";
import "../../styles/home.scss";
import { Box } from "@material-ui/core";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default class Members extends React.Component {
    render() {
        return (
            <div className={"box"}>
              <Box pt={1}>
                <center>
                  <div className={"members"}>
                    {members.map((member) => (
                      <div className={"member"}>
                        <div className={"member_img"}>
                          <img src={member.image}></img>
                        </div>
                        <div className={"member_name"}>
                          {member.website &&
                            <a href={member.website}><span>{member.name}</span></a>
                          }
                          {!member.website &&
                            <span>{member.name}</span>
                          }
                        </div>
                        <div className={"member_position"}>
                          {member.position}
                        </div>
                        <div className={"member_email"}>
                          {member.email}
                        </div>
                        <div className={"member_socials"}>
                          {member.github &&
                            <div className={"social_icon"}>
                              <a href={member.github} target="_blank">
                                <FaGithub size={30} />
                              </a>
                            </div>
                          }
                          {member.linkedin &&
                            <div className={"social_icon"}>
                              <a href={member.linkedin} target="_blank">
                                <FaLinkedinIn size={30} />
                              </a>
                            </div>
                          }
                          {member.facebook &&
                            <div className={"social_icon"}>
                              <a href={member.facebook} target="_blank">
                                <FaFacebookF size={30} />
                              </a>
                            </div>
                          }
                          {member.twitter &&
                            <div className={"social_icon"}>
                              <a href={member.twitter}>
                                <FaTwitter size={30} />
                              </a>
                            </div>
                          }
                          {member.instagram &&
                            <div className={"social_icon"}>
                              <a href={member.instagram} target="_blank">
                                <FaInstagram size={30} />
                              </a>
                            </div>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </center>
              </Box>
            </div>
        )
    }
}