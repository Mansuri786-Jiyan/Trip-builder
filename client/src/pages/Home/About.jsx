import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <Container>

        {/* ===== HERO / IMAGE SECTION ===== */}
        <Row className="items-center mb-16">
          <Col lg="6" className="mb-6 lg:mb-0">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-slate-800 mb-4"
            >
              About <span className="text-amber-500">Travel World</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              className="text-gray-600 leading-relaxed"
            >
              Travel World is a modern trip builder web application that helps
              users explore destinations, view tour details, and plan trips
              easily. The platform is built using modern full-stack technologies
              with a focus on clean UI, performance, and scalability.
            </motion.p>
          </Col>

          <Col lg="6">
            {/* IMAGE PLACEHOLDER */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              className="w-full h-[300px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-500"
            >
              Image Section (Add Travel Image Here)
            </motion.div>
          </Col>
        </Row>

        {/* ===== MISSION SECTION ===== */}
        <Row className="mb-16">
          <Col lg="12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow"
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to simplify travel planning by providing a
                user-friendly platform where travelers can discover tours,
                compare options, and make informed decisions. This project is
                also designed to demonstrate real-world MERN stack development
                practices.
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* ===== TEAM / DEVELOPER SECTION ===== */}
        <Row className="mb-16">
          <Col lg="12" className="text-center mb-8">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-slate-800"
            >
              Developer
            </motion.h3>
          </Col>

          <Col lg="4" className="mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              {/* PROFILE IMAGE PLACEHOLDER */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                Photo
              </div>

              <h4 className="text-lg font-semibold text-slate-800">
                Jiyan Mansuri
              </h4>
              <p className="text-sm text-gray-500 mb-3">
                MERN Stack Developer
              </p>
              <p className="text-gray-600 text-sm">
                Final-year Computer Engineering student with hands-on experience
                in React, Node.js, and MongoDB. Passionate about building
                scalable web applications.
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* ===== ROADMAP / TIMELINE ===== */}
        <Row>
          <Col lg="12" className="text-center mb-8">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-slate-800"
            >
              Project Roadmap
            </motion.h3>
          </Col>

          <Col lg="10" className="mx-auto">
            <div className="space-y-6">

              {[
                {
                  title: "Phase 1 – UI & Frontend",
                  desc: "Designed responsive UI, tour listings, and detail pages using React and Tailwind CSS.",
                },
                {
                  title: "Phase 2 – Backend APIs",
                  desc: "Developed REST APIs using Node.js, Express, and MongoDB for tours and reviews.",
                },
                {
                  title: "Phase 3 – State Management",
                  desc: "Integrated Redux Toolkit for global state management and API handling.",
                },
                {
                  title: "Phase 4 – Future Enhancements",
                  desc: "Booking system, payment integration, admin dashboard, and deployment.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}

            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default About;
