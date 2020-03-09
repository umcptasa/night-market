/**
 * Component containing the schedule
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Col, Row, Table } from "reactstrap";

const SectionSchedule = (props) => {
    const data = useStaticQuery(graphql`
    query {
        allGoogleSheetWebsiteScheduleRow {
          nodes {
            event
            time
            id
          }
        }
      }      
    `);

    return (
        <div className="section section-dark" id="schedule">
            <Container>
                <Row>
                    <Col sm="12">
                        <h1 className="title text-center">Schedule</h1>
                    </Col>
                </Row>

                <Row>
                    <Col className="ml-auto mr-auto" sm="8">
                        <Table striped>
                            <thead>
                                <tr>
                                    <th className="info-border-color">
                                        Time
                                    </th>
                                    <th className="info-border-color">
                                        Event
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.allGoogleSheetWebsiteScheduleRow.nodes.map(row => {
                                    return (
                                        <tr>
                                            <td>{row.time}</td>
                                            <td>{row.event}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default SectionSchedule;

