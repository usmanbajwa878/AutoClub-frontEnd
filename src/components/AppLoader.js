import React from "react";
import { CModal, CModalBody } from "@coreui/react";
import Lottie from "lottie-react";
import wheelAnimation from "../assets/lottie/wheel.json";

export default function AppLoader({ visible }) {
  return (
    <>
      <CModal backdrop alignment="center" size="sm" visible={visible || false}>
        <CModalBody>
          <Lottie loop={true} autoplay={true} animationData={wheelAnimation} />
        </CModalBody>
      </CModal>
    </>
  );
}
