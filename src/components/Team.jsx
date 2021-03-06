import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Kiah from '../assets/images/kiah.jpeg'
import Yoshi from '../assets/images/Yoshi.jpeg'
import BradTheBrick from '../assets/images/BradTheBrick.png'
import MemberCard from './MemberCard'


export default function Team() {
    return (
        <>
            <div className="teamDiv" id="team">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12} className="text-center my-4">
                            <h2>Meet the Team</h2>
                            <p>The Silly Sloths team is a dynamic duo – Kiah and Joshua – passionate about art, crypto, and blockchain technology.</p>
                        </Col>
                        <MemberCard image={Kiah} name="Nakiah" description="Nakiah is a talented artist who personally drew all the Silly Sloths digital art by hand."/>
                        <MemberCard image={Yoshi} name="Joshua" description="Joshua aka Yoshi Motion is the creative vision and project manager of Silly Sloths."/>
                        <MemberCard image={BradTheBrick} name="Brad The Brick" description="Brad is the brilliant-minded media producer and video creator."/>
                    </Row>
                </Container>
            </div>
        </>
    )
}
