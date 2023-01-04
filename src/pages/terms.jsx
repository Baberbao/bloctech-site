import {
  Box,
  Container,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { motion, useIsPresent } from "framer-motion"
import SeoHelmet from "../components/SeoHelmet"

import img from "../assets/privacyBg.png"
import CustomButton from "../components/CustomButton"
import { AppContext } from "../utils/utils"

//Styled Component
const HeadingTwo = styled(Typography)({
  background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  fontFamily: "Mulish",
  fontWeight: 700,
  letterSpacing: "0.2px",
  color: "#3B3F6D",
})
const Paragraph = styled(Typography)({
  fontWeight: 400,
  letterSpacing: "0.3px",
  color: "#fff",
  lineHeight: { xs: "auto", md: "22px" },
  fontSize: { xs: "13px", md: "16px" },
})

const Home = () => {
  const matches = useMediaQuery("(max-width:700px)")
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box textAlign="center" py={matches ? 15 : 25}>
        <Box
          component="h1"
          m="auto"
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          lineHeight={{ xs: "auto", sm: "60px" }}
          color="#fff"
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            width: "fit-content",
          }}
        >
          TERMS OF SERVICE
        </Box>
      </Box>
    </Box>
  )
}

const Terms = () => {
  const isPresent = useIsPresent()
  const [terms1, setTerms1] = useState(false)
  const { setTerms } = useContext(AppContext)

  useEffect(() => {
    let term = localStorage.getItem("terms")
    if (term) {
      setTerms1(true)
      setTerms("none")
    }
  }, [setTerms])
  const setValueToLocalStorage = () => {
    localStorage.setItem("terms", "true")
    setTerms1(true)
    setTerms("none")
  }
  return (
    <div>
      <SeoHelmet title="Terms and services BlocTech Solutions | BlocTech Solutions" />
      <motion.div
        initial={{ scaleX: 1, opacity: 1 }}
        animate={{
          scaleX: 0,
          opacity: 0.5,
          transition: { duration: 1.6, ease: "circOut" },
        }}
        exit={{
          scaleX: 1,
          opacity: 1,
          transition: { duration: 1.6, ease: "circIn" },
        }}
        style={{
          originX: isPresent ? 0 : 1,
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          background:
            "linear-gradient(202.6deg, #A615BD 11.43%, #3940DB 85.3%)",
          zIndex: 10000,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 4, ease: "circOut" } }}
        exit={{ opacity: 0, transition: { duration: 4, ease: "circIn" } }}
      >
        <Home />

        <Container>
          <Box
            mt={10}
            component="h1"
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            lineHeight={{ xs: "auto", sm: "60px" }}
            color="#fff"
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            IMPORTANT NOTICES
          </Box>
          <Box
            component="p"
            fontSize={{ xs: "13px", sm: "20px" }}
            fontWeight={400}
            letterSpacing="0.3px"
            // color="primary.main"
            color="#FFFFFF"
            lineHeight={{ xs: "auto", sm: "25.1px" }}
            my={5}
            textAlign="justify"
            px="8px"
          >
            PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY ACCESSING OR USING
            OUR WEB-SITE AND SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS OF
            SERVICE, PRIVACY POLICY, AND ALL OTHER TERMS INCORPORATED BY
            REFERENCE (IF ANY). IF YOU DO NOT AGREE TO ALL OF THESE TERMS, DO
            NOT ACCESS OR USE OUR WEBSITE OR SERVICES.
            <Box mt="20px" lineHeight={{ xs: "auto", sm: "25.1px" }}>
              IF YOU BECOME A PAID USER AND PAY BY CREDIT OR DEBIT CARD (OR
              OTHER PAYMENT METHOD ASSOCIATED WITH AN AUTOMATICALLY RENEWING
              SUBSCRIPTION), YOUR SUBSCRIPTION WILL AUTOMATICALLY RENEW FOR
              CERTAIN PERIODS OF TIME IF YOU DO NOT CANCEL PRIOR TO THE END OF
              THE TERM. SEE SUB-SECTION 6.3. FOR MORE INFORMATION ON THE
              AUTOMATIC RENEWAL TERMS APPLICABLE TO SUBSCRIPTIONS.
            </Box>
          </Box>

          {/* ///////////////////////////////////////////////////////////// */}
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              ACCEPTANCE OF AGREEMENT
            </HeadingTwo>
          </Box>

          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              1.1. These Terms of Service (the "Agreement") constitute a legal
              agreement that governs the relationship with users and others who
              interact with Bloctech Solutions, its subsidiaries and affiliates
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              ("we," or "us") in connection with the use of
              https://bloctechsolutions.com website and related services,
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              products, and features (referred to collectively as the
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              "Service"). Bloctech Solutions may offer additional services or
              products or modify or revise any part of the Service at our
              discretion, and this Agreement will apply to all additional
              services or products and all modified or revised Service unless
              otherwise indicated. Bloctech Solutions also reserves the right to
              cease offering any part of the Service. You agree that we shall
              not be liable to you or any third party for any modification,
              revision, suspension or discontinuance of any part of the Service.
              <Box mt="20px">
                1.2. Your use of certain parts of the Service may be subject to
                additional terms and conditions (if any), and such terms and
                conditions will be either listed in this Agreement, or will be
                presented or accessible to you by us when you sign up to use, or
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                use, such Service ("Additional Terms"). All such Additional
                Terms are incorporated by reference into this Agreement unless
                otherwise indicated.
              </Box>
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              CHANGES TO AGREEMENT
            </HeadingTwo>
          </Box>

          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              THIS AGREEMENT AND ANY POLICY OR GUIDELINE OF THE SERVICE MAY BE
              MODIFIED BY BLOCTECH SOLUTIONS IN ITS SOLE DISCRETION AT ANY TIME.
              <Box mt="20px">
                2.1. We indicate at the top of the page when this Agreement was
                last updated. Unless otherwise indicated, any changes or
                modifications will be effective immediately upon posting the
                revisions, and your use of the Service after such posting will
                constitute acceptance by you of the revised Agreement.
                Alternatively, if you terminate your subscription at such time,
                your use of the Service after your termination will constitute
                acceptance by you of the revised Agreement.
              </Box>
              <Box mt="20px">
                2.2. You should frequently review this Agreement and all
                applicable terms and policies to understand the terms that apply
                to your use of the Service. If you do not agree to the amended
                terms, you must stop using the Service.
              </Box>
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              ELECTRONIC RECORDS
            </HeadingTwo>
          </Box>

          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              Because the Service is provided electronically, you must consent
              to providing important information electronically if you wish to
              use the Service. You consent to being provided with this
              Agreement, notices, disclosures, information, policies and other
              materials in electronic
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              form (collectively, "Electronic Records"), rather than in paper
              form. Electronic Records will be provided on our website or sent
              to the email address associated with your profile.
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              ELIGIBILITY
            </HeadingTwo>
          </Box>

          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              4.1. Age Restrictions. No part of the Service is directed to
              persons under the age of 18. IF YOU ARE UNDER 18 YEARS OF AGE, YOU
              MUST NOT USE OR ACCESS THE SERVICE AT ANY TIME OR IN ANY MANNER.
              By using the Service, you represent and warrant you are at least
              18 years of age. If you are under 18 years of age, then you are
              not permitted to use the Service.
              <Box mt="20px">
                4.2. Accessing and/or using the Service is void where prohibited
                by applicable law of your location. By using the Service, you
                represent and warrant that you have the right, authority and
                capacity to enter into this Agreement and to abide by all of the
                terms and conditions of this Agreement
              </Box>
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              USE OF SERVICE
            </HeadingTwo>
          </Box>

          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              5.1. You agree that you will only use the Service in a manner
              consistent with this Agreement and applicable laws and
              regulations.
              <Box mt="20px">
                5.2. Service Description. The Service includes various tools for
                website, web-product and other related analysis that may be
                proposed as several packages with different functions. Please
                check each package to find one that is the best for you. Be
                aware that some packages may be limited by certain parameters,
                e.g. traffic, number of seats etc. Once you reached your limit,
                you may not use the Service anymore or your use of the Service
                might be restricted unless you upgrade your account to a higher
                package. We recommend that you plan and monitor your use of the
                Service to avoid interruptions or restrictions in your
                experience with Bloctech Solutions products. At our sole
                discretion, we may propose you to conclude a written contract
                that will govern our relations regarding the Services instead of
                this Agreement if your package is of Enterprise level or in
                other appropriate cases.
              </Box>
              <Box mt="20px">
                Complete information on the Service and its currently available
                features can be found at Help Centre.
              </Box>
              <Box mt="20px">
                5.2. Service Description. The Service includes various tools for
                website, web-product and other related analysis that may be
                proposed as several packages with different functions. Please
                check each package to find one that is the best for you. Be
                aware that some packages may be limited by certain parameters,
                e.g. traffic, number of seats etc. Once you reached your limit,
                you may not use the Service anymore or your use of the Service
                might be restricted unless you upgrade your account to a higher
                package. We recommend that you plan and monitor your use of the
                Service to avoid interruptions or restrictions in your
                experience with Bloctech Solutions products. At our sole
                discretion, we may propose you to conclude a written contract
                that will govern our relations regarding the Services instead of
                this Agreement if your package is of Enterprise level or in
                other appropriate cases.
              </Box>
              <Box mt="20px">
                YOU ARE ACKNOWLEDGED THAT THE SERVICE DESCRIPTION GIVEN IN THIS
                SECTION IS FOR INFORMATION PURPOSES ONLY AND, YOU AGREE THAT THE
                SERVICES MAY HAVE VARYING CHARACTERISTICS AS WELL AS BE AMENDED
                BY US AT ANY TIME WITHOUT OBLIGATION TO NOTIFY YOU OF ANY
                CHANGES BEING MADE.
              </Box>
              <Box mt="20px">
                5.3. Profile Security. You understand that you are responsible
                for maintaining the confidentiality of the username and password
                of your profile, and you are fully responsible for all
                activities that occur under your username and password,
                including the purchase of our subscriptions. You agree to
                immediately notify us if you suspect any unauthorized use of
                your username or password or any other breach of security. You
                acknowledge that Bloctech Solutions is not responsible for any
                loss or damage arising from the theft or misappropriation of
                your username or password.
              </Box>
              <Box mt="20px">
                5.4. Data Accuracy. Bloctech Solutions is not responsible or
                liable in any manner for the accuracy of data made available to
                us by you, your website, your web-product, your database or any
                other source that is not under our reasonable control. YOU
                ACKNOWLEDGE THAT YOU USE THE SERVICE AT YOUR OWN RISK.
              </Box>
            </Paragraph>
          </Box>

          {/* ///////////////////////////////////////////////////////////// */}
          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              5.6. You understand and agree that if Bloctech Solutions believes
              in its sole discretion that you have violated the terms of this
              Agreement, misused the Service or behaved in a way that could be
              regarded as inappropriate, unlawful, illegal or unsafe, we may,
              among other things, investigate, take legal action against you
              and/or terminate your profile and cancel your subscription without
              any refund whether partial of in full and/or report your
              violations to competent authorities.
            </Paragraph>
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              PAYMENT TERMS
            </HeadingTwo>
          </Box>

          <Box
            component="p"
            fontSize={{ xs: "13px", sm: "16px" }}
            fontWeight={400}
            letterSpacing="0.3px"
            color="#FFFFFF"
            lineHeight={{ xs: "auto", sm: "22px" }}
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              6.1. General. At all times, actual prices and subscription options
              are available at https://bloctechsolutions.com/. If you purchase
              the Service, you agree to pay the applicable fees, including
              without limitation periodic fees for ongoing subscriptions, as
              they become due plus all related taxes (including without
              limitation sales and use taxes, duties or other governmental taxes
              or fees), and to reimburse us for all collection costs and
              interest for any overdue amounts. All fees and charges are
              nonrefundable and there are no refunds or credits for any
              partially used Service (including partially used subscription
              periods) except (i) as expressly set forth in this Agreement, (ii)
              as otherwise required by applicable law and (iii) at our sole and
              absolute discretion. Fees for the Service may be payable in
              advance, in arrears, per usage or as otherwise described when you
              purchase the Service.
              <Box mt="20px">
                ALL PRICES FOR THE SERVICE ARE SUBJECT TO CHANGE WITHOUT NOTICE.
              </Box>
              <Box mt="20px">
                6.2. Payment Method. Bloctech Solutions may, from time to time,
                offer various payment methods, including without limitation
                payment by credit card, by debit card, by check, by certain
                mobile payment providers etc. You authorize us to charge you for
                the Service through any payment method(s) you select when
                purchasing the Service
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                (the "Payment Method") and you agree to make payment using such
                Payment Method(s) (we may, from time to time, receive and use
                updated payment method information provided by you or that
                financial institutions or payment processors may provide to us
                to update information related to your Payment Method(s), such as
                updated expiration dates or account numbers). Certain Payment
                Methods, such as credit cards and debit cards, may involve
                agreements between you and the financial institution, credit
                card issuer or other provider
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                of your chosen Payment Methods (the "Payment Method Provider").
                If we do not receive payment from your Payment Method Provider,
                you agree to directly pay all amounts due upon demand from us.
                Your non-termination or continued use of the Service reaffirms
                that we are authorized to charge your Payment Method.
              </Box>
              <Box mt="20px">
                6.3. Automatic Renewal of Subscriptions. IF YOU PAY FOR A
                SUBSCRIPTION BY CREDIT OR DEBIT CARD (OR OTHER PAYMENT METHOD
                IDENTIFIED ON OUR SERVICE AS INVOLVING AN AUTOMATICALLY RENEWING
                SUBSCRIPTION) AND YOU DO NOT CANCEL YOUR SUBSCRIPTION PRIOR TO
                THE END OF THE SUBSCRIPTION TERM, YOUR SUBSCRIPTION WILL BE
                AUTOMATICALLY EXTENDED AT THE END OF EACH TERM FOR SUCCESSIVE
                RENEWAL PERIODS OF THE SAME DURATION AS THE SUBSCRIPTION TERM
                ORIGINALLY SELECTED (FOR EXAMPLE, UNLESS YOU CANCEL, A ONE MONTH
                SUBSCRIPTION WILL AUTOMATICALLY RENEW ON A MONTHLY BASIS AND A
                SIX MONTH SUBSCRIPTION WILL AUTOMATICALLY RENEW ON A SIX MONTH
                BASIS). UNLESS OTHERWISE INDICATED IN ANY APPLICABLE ADDITIONAL
                TERMS OR COMMUNICATIONS WE SEND TO YOUR REGISTERED EMAIL
                ADDRESS, SUCH RENEWAL WILL BE AT THE SAME SUBSCRIPTION FEE AS
                WHEN YOU FIRST SUBSCRIBED, PLUS ANY APPLICABLE TAXES, UNLESS WE
                NOTIFY YOU AT LEAST 10 DAYS PRIOR TO THE END OF YOUR CURRENT
                TERM THAT THE SUBSCRIPTION FEE WILL INCREASE. YOU ACKNOWLEDGE
                AND AGREE THAT YOUR PAYMENT METHOD WILL BE AUTOMATICALLY CHARGED
                FOR SUCH SUBSCRIPTION FEES, PLUS ANY APPLICABLE TAXES, UPON EACH
                SUCH AUTOMATIC RENEWAL. YOU ACKNOWLEDGE THAT YOUR SUBSCRIPTION
                IS SUBJECT TO AUTOMATIC RENEWALS AND YOU CONSENT TO AND ACCEPT
                RESPONSIBILITY FOR ALL RECURRING CHARGES TO YOUR CREDIT OR DEBIT
                CARD (OR OTHER PAYMENT METHOD, AS APPLICABLE) BASED ON THIS
                AUTOMATIC RENEWAL FEATURE WITHOUT FURTHER AUTHORIZATION FROM YOU
                AND WITHOUT FURTHER NOTICE EXCEPT AS REQUIRED BY LAW. YOU
                FURTHER ACKNOWLEDGE THAT THE AMOUNT OF THE RECURRING CHARGE MAY
                CHANGE IF THE APPLICABLE TAX RATES CHANGE OR IF YOU ARE NOTIFIED
                THAT THERE WILL BE AN INCREASE IN THE APPLICABLE SUBSCRIPTION
                FEES.
              </Box>
              <Box mt="20px">
                6.4. Current Information Required. You agree to provide current,
                complete and accurate billing information and agree to promptly
                update all such information (such as changes in billing address,
                credit card number or credit card expiration date) as necessary
                for the processing of all payments that are due to us. You agree
                to promptly notify Bloctech Solutions if your Payment Method is
                cancelled (for example, due to loss or theft) or if you become
                aware of a potential breach of security related to your Payment
                Method. If you fail to provide any of the foregoing information,
                you acknowledge that your current Payment Method may continue to
                be charged for the Paid Service and you remain responsible for
                all such charges.
              </Box>
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}

          {/* ///////////////////////////////////////////////////////////// */}

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              INTELLECTUAL PROPERTY RIGHTS AND <br /> LIMITED licence
            </HeadingTwo>
          </Box>

          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              7.1. The Service and all materials therein or transferred thereby,
              including, without limitation, software, images, text, graphics,
              designs, illustrations, logos, patents, trademarks, service marks,
              copyrights, information, data, other arrangement thereof (the
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              "Proprietary Materials''), and all intellectual property rights
              related thereto, are the exclusive property of Bloctech Solutions
              and its licensors. Except as explicitly provided herein, nothing
              in this Agreement shall be deemed to create a licence in or under
              any such intellectual property rights of Bloctech Solutions.
              <Box mt="20px">
                7.2. You are granted a limited, revocable, non-transferable,
                non-sublicensable licence to access and use the Service, subject
                to the terms and conditions of this Agreement. You agree that
                you will not (i) copy, modify, publish, adapt, sublicence,
                translate, sell, distribute, transmit, perform, display, reverse
                engineer, decipher, decompile or otherwise disassemble any
                portion of the Proprietary
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Materials or the Service or cause others to do so; (ii) "frame"
                or
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "mirror" any part of the Service, without our prior written
                authorization; (iii) use meta tags or code or other devices
                containing any reference to Bloctech Solutions or the Service in
                order to direct any person to any other website for any purpose;
                (iv) resell the Service; (v) use any data mining, robots, or
                similar data gathering or extraction methods or otherwise
                collect any data or other content from the Service; (vi) forge
                headers or otherwise manipulate identifiers in order to disguise
                the origin of any information transmitted through the Service;
                (vii) use any automated methods or processes to create user
                accounts or access the Service or (viii) use the Proprietary
                Materials or the Service other than for their intended purpose.
                Any use of the Service or Proprietary Materials other than as
                expressly authorized herein, without the prior written consent
                of Bloctech Solutions, is strictly prohibited and will violate
                and terminate the licence granted herein. Such unauthorized use
                may also violate applicable laws, including without limitation
                copyright and trademark laws and applicable communications
                regulations and statutes. Unless explicitly stated herein,
                nothing in this Agreement shall be construed as conferring any
                licence to intellectual property rights, whether by estoppel,
                implication or otherwise. We reserve all rights not expressly
                granted herein in the Service and the Proprietary Materials.
              </Box>
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}

          {/* ///////////////////////////////////////////////////////////// */}

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              DISCLAIMERS
            </HeadingTwo>
          </Box>

          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              8.1. Bloctech Solutions PROVIDES THE SERVICE AND THE PROPRIETARY
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              MATERIALS ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE MAXIMUM
              EXTENT PERMITTED UNDER APPLICABLE LAW, WE EXPRESSLY DISCLAIM ANY
              WARRANTIES OR REPRESENTATIONS OF ANY KIND, WHETHER EXPRESS,
              IMPLIED, STATUTORY OR OTHERWISE WITH RESPECT TO THE SERVICE
              (INCLUDING ALL PROPRIETARY MATERIALS AND OTHER INFORMATION AND
              CONTENT CONTAINED THEREIN), INCLUDING ANY IMPLIED WARRANTIES OF
              MERCHANTABILITY, TITLE, ACCURACY, FITNESS FOR A PARTICULAR PURPOSE
              OR NON-INFRINGEMENT.
              <Box mt="20px">
                8.2. Bloctech Solutions DOES NOT REPRESENT AND WARRANT THAT (A)
                YOUR USE OF THE SERVICE WILL BE SECURE, UNINTERRUPTED, COMPLETE,
                ALWAYS AVAILABLE, ERROR-FREE OR WILL MEET YOUR REQUIREMENTS, (B)
                ANY DEFECTS IN THE SERVICE WILL BE CORRECTED OR (C) THE SERVICE
                IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE DISCLAIM
                LIABILITY FOR, AND NO WARRANTY IS MADE WITH RESPECT TO, THE
                CONNECTIVITY AND AVAILABILITY OF THE SERVICE OR THE DELIVERY OF
                ANY MESSAGES.
              </Box>
              <Box mt="20px">
                8.3. BLOCTECH SOLUTIONS DOES NOT: (i) GUARANTEE THE ACCURACY,
                COMPLETENESS OR USEFULNESS OF ANY INFORMATION ON THE SERVICE, OR
                (ii) ADOPT, ENDORSE OR ACCEPT RESPONSIBILITY OR LIABILITY FOR
                THE ACCURACY OR RELIABILITY OF ANY OPINION, ADVICE, OR STATEMENT
                MADE BY ANY PARTY OTHER THAN WE. UNDER NO CIRCUMSTANCES WILL WE
                BE RESPONSIBLE FOR ANY LOSS, DAMAGE OR HARM OF ANY KIND
                RESULTING FROM YOUR RELIANCE ON INFORMATION OR OTHER CONTENT
                POSTED ON THE SERVICE.
              </Box>
              <Box mt="20px">
                8.4. SOME COUNTRIES AND JURISDICTIONS DO NOT ALLOW THE
                DISCLAIMER OF IMPLIED WARRANTIES AND TERMS IN CONTRACTS WITH
                CONSUMERS AND AS A RESULT THE CONTENTS OF THIS SECTION MAY NOT
                APPLY TO YOU.
              </Box>
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}

          {/* ///////////////////////////////////////////////////////////// */}

          <Box
            component="h1"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              LIMITATION OF LIABILITY
            </HeadingTwo>
          </Box>

          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              9.1. TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
              BLOCKTECH SOLUTIONS, ITS AFFILIATES, DIRECTORS, MEMBERS, EMPLOYEES
              OR AGENTS BE LIABLE FOR ANY SPECIAL, CONSEQUENTIAL OR INDIRECT
              DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF USE, LOSS OF PROFITS
              OR LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING
              BUT NOT LIMITED TO NEGLIGENCE) OR OTHERWISE, ARISING OUT OF OR
              RELATING TO THE USE OF OR INABILITY TO USE THE SERVICE, OR THE
              PROPRIETARY MATERIALS CONTAINED IN OR ACCESSED THROUGH THE
              SERVICE, INCLUDING WITHOUT LIMITATION ANY DAMAGES CAUSED BY OR
              RESULTING FROM RELIANCE BY USER ON ANY INFORMATION OBTAINED FROM
              US, OR THAT RESULTS FROM MISTAKES, OMISSIONS, INTERRUPTIONS,
              DELETION OF FILES OR EMAIL, ERRORS, DEFECTS, VIRUSES, DELAYS IN
              OPERATION OR TRANSMISSION OR ANY FAILURE OF PERFORMANCE, WHETHER
              OR NOT RESULTING FROM ACTS OF GOD, COMMUNICATIONS FAILURE, THEFT,
              DESTRUCTION OR UNAUTHORIZED ACCESS TO OUR RECORDS, PROGRAMS OR
              SERVICES. UNDER NO CIRCUMSTANCES WILL OUR AGGREGATE LIABILITY, IN
              ANY FORM OF ACTION WHATSOEVER IN CONNECTION WITH THIS AGREEMENT OR
              THE USE OF THE SERVICE, EXCEED THE GREATER OF (1) THE AGGREGATE
              AMOUNT OF FEES FOR ANY SERVICE PAID BY YOU DURING THE IMMEDIATELY
              PRECEDING SIX MONTHS OR (2) $100.
              <Box mt="20px">
                9.2. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO
                EVENT SHALL BLOCTECH SOLUTIONS BE LIABLE FOR ANY DAMAGES
                WHATSOEVER, WHETHER DIRECT, INDIRECT, GENERAL, SPECIAL,
                COMPENSATORY, CONSEQUENTIAL, AND/OR INCIDENTAL, ARISING OUT OF
                OR RELATING TO THE CONDUCT OF YOU OR ANYONE ELSE IN CONNECTION
                WITH THE USE OF THE SERVICE, INCLUDING WITHOUT LIMITATION,
                BODILY INJURY, EMOTIONAL DISTRESS, IDENTITY THEFT AND/OR ANY
                OTHER DAMAGES RESULTING FROM COMMUNICATIONS, MEETINGS OR OTHER
                INTERACTIONS WITH OTHER USERS OF THE SERVICE. THIS INCLUDES ANY
                CLAIMS, LOSSES OR DAMAGES ARISING FROM THE CONDUCT OF USERS WHO
                HAVE REGISTERED UNDER FALSE PRETENSES OR WHO ATTEMPT TO DEFRAUD
                OR HARM YOU.
              </Box>
              <Box mt="20px">
                9.3. SOME COUNTRIES AND JURISDICTIONS DO NOT ALLOW THE
                LIMITATION OR EXCLUSION OF LIABILITY IN CONTRACTS WITH CONSUMERS
                AND AS A RESULT THE CONTENTS OF THIS SECTION MAY NOT APPLY TO
                YOU.
              </Box>
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}

          {/* ///////////////////////////////////////////////////////////// */}

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              GOVERNING LAW
            </HeadingTwo>
          </Box>

          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              The laws of the Republic of Pakistan, excluding its conflicts of
              law rules, govern this Agreement and your use of the Service. To
              the extent that any action relating to any dispute hereunder is
              permitted to be brought in a court of law, such action will be
              subject to the exclusive jurisdiction of the in Faisalabad,
              Pakistan, and you hereby irrevocably submit to personal
              jurisdiction in such courts, and waive any defence of inconvenient
              forum.
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}

          {/* ///////////////////////////////////////////////////////////// */}

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              INDEMNITY
            </HeadingTwo>
          </Box>

          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              You agree to defend, indemnify and hold Bloctech Solutions, its
              subsidiaries and affiliates, and each of their directors,
              officers, managers, agents, contractors, partners and employees
              harmless from any loss, liability, claim, damages, costs, debts,
              expenses or demand,
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              including reasonable attorney's fees, due to or arising from (i)
              your use of or access to the Service, including any data
              transmitted or received by you, or your inability to use the
              Service; (ii) any claim or damages that arise as a result of the
              Service (iii) your violation of any of the terms of this
              Agreement, including without limitation your breach of any of the
              representations and warranties above, (v) your violation of any
              rights of a third party, including without limitation any right of
              privacy or intellectual property rights; (vi)
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              any other party's access and use of the Service with your unique
              username, password or other appropriate security code or (vii)
              your violation of any applicable laws, rules or regulations.
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}

          {/* ///////////////////////////////////////////////////////////// */}

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box component="h2">
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                TERMINATION
              </HeadingTwo>
            </Box>
          </Box>

          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              12.1. Unless otherwise provided, this Agreement is effective upon
              your first use of the Service and shall remain in effect until it
              is terminated in accordance with the terms of this Agreement.
              <Box mt="20px">
                12.2. Termination by Bloctech Solutions. Notwithstanding
                anything to the contrary in this Agreement, we may suspend,
                deactivate or terminate your account and your right to use the
                Service and may block or prevent your access to and use of the
                Service at any time in our sole discretion, for any reason or no
                reason, without explanation and without notice. We also reserve
                the right to remove or block access to your account information
                or data from our Service and any other records at any time at
                our sole discretion. In the event that we determine that your
                access to the Service is terminated or suspended for cause, such
                as due to any breach of this Agreement or the implementation of
                our repeat infringer policy, you agree that all fees then paid
                to Bloctech Solutions by you will be nonrefundable, except as
                otherwise provided by law, and all outstanding or pending
                payments under the terms of your subscription will immediately
                be due and payable. All decisions as to the refundability of the
                fees are at our sole discretion.
              </Box>
              <Box mt="20px">
                12.3. Termination by You. You may cancel your subscription,
                deactivate or terminate your account at any time, for any or no
                reason, by accessing the settings page of your account or by
                contacting us. If you cancel your subscription, your use of the
                Service will continue until the end of your then-current
                subscription term, but your subscription will not be renewed
                after that term expires. Except as otherwise provided by law or
                under this Agreement, you will not be entitled to any refund of
                the fees you have paid to Bloctech Solutions and all outstanding
                or pending payments under the terms of your subscription will
                immediately be due and payable.
              </Box>
              <Box mt="20px">
                12.4. Survival. After your account is suspended, deactivated or
                terminated, all terms that by their nature may survive
                termination of this Agreement shall be deemed to survive such
                termination, including without limitation Sections 8, 9 and 11.
              </Box>
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}

          {/* ///////////////////////////////////////////////////////////// */}

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box component="h2">
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                MISCELLANEOUS
              </HeadingTwo>
            </Box>
          </Box>

          <Box
            component="p"
            my={5}
            textAlign="justify"
            px="8px"
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <Paragraph>
              13.1. You agree that this Agreement, together with the Privacy
              Policy, and any Additional Terms, contains the entire agreement
              between you and Bloctech Solutions regarding the use of the
              Service and supersedes all prior agreements and understandings
              (including without limitation any prior versions of this
              Agreement), except to the extent that the parties have entered
              into a separate written agreement applicable to the Service that
              expressly governs over this Agreement.
              <Box mt="20px">
                13.2. If any provision, or any portion thereof, of this
                Agreement is held illegal, void, invalid or unenforceable, such
                provision will be changed and interpreted to accomplish the
                objectives of the provision to the greatest extent possible
                under any applicable law and the remaining provisions will
                continue in full force and effect, unless otherwise indicated
                herein.
              </Box>
              <Box mt="20px">
                13.3. This Agreement, and any rights and licences granted
                hereunder, may not be transferred or assigned by you, but may be
                assigned by Bloctech Solutions without restriction. Any
                attempted transfer or assignment in violation hereof shall be
                null and void.
              </Box>
              <Box mt="20px">
                13.4. The failure to require performance of any provision will
                not affect our right to require performance at any time
                thereafter, nor will a waiver of any breach or default of this
                Agreement or any provision of this Agreement constitute a waiver
                of any subsequent breach or default or a waiver of the provision
                itself.
              </Box>
              <Box mt="20px">
                13.5. Use of section headers in this Agreement is for
                convenience only and will not have any impact on the
                interpretation of particular provisions.
              </Box>
              <Box mt="20px">
                13.6. You agree that no joint venture, partnership, employment,
                or agency relationship exists between you and Bloctech Solutions
                as a result of this Agreement or use of the Service.
              </Box>
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}

          {/* ///////////////////////////////////////////////////////////// */}

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box component="h2">
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                CONTACT INFORMATION
              </HeadingTwo>
            </Box>
          </Box>

          <Box component="p" px="8px" padding={{ sm: "0px 30px", xs: "10px" }}>
            <Paragraph>
              For any question, proposition, suggestion, inquiry or feedback
              please contact us to: Address: 5th Floor, GM Plaza, Kohinoor City,
              Faisalabad, Punjab 38000, Get in touch with Us:
              contact@bloctechsolutions.com Call Us: (+92)03138604818
            </Paragraph>
          </Box>
          {/* ///////////////////////////////////////////////////////////// */}

          <Stack
            pb="50px"
            width="100%"
            mt="40px"
            mb="40px"
            justifyContent={"center"}
            padding={{ sm: "0px 30px", xs: "10px" }}
          >
            <CustomButton disabled={terms1} onClick={setValueToLocalStorage}>
              {terms1
                ? "You agreed to our Terms and Conditions"
                : "Agree to terms and services"}
            </CustomButton>
          </Stack>
        </Container>
      </motion.div>
    </div>
  )
}

export default Terms
