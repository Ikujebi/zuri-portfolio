import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { PiBagSimpleFill } from "react-icons/pi";

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      await axios.post('http://localhost:3001/send-email', {
        to: values.email,
        subject: values.subject,
        message: values.message,
      });

      notification.success({
        message: 'Success',
        description: 'Your message has been sent. Thank you!',
      });

      form.resetFields();
    } catch (error) {
      console.error('Error:', error);
      notification.error({
        message: 'Error',
        description: 'An error occurred while sending your message.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="paddsection px-2 bg-gray-200 flex flex-col justify-center items-center mt-[2rem]">
      <div className="container">
        <div className="contact-block1">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-contact">
                <h2 className="mb-30">GET IN TOUCH</h2>
                <ul className="contact-details">
                  <li><span>Lagos, Nigeria</span></li>
                  <li> <span>
                    <Link to="tel:+2348137977542" className='flex gap-1 hover:text-green-700'>CALL ME <span className='mt-1'><IoCallOutline /></span> +234 813 797 7542 </Link>
                  </span></li>

                 <li ><Link className='flex hover:text-green-700  gap-1' target='blank' to={"https://drive.google.com/file/d/1T6i5Jq99S3nzzT6S7586CtMano_YLotI/view?usp=drive_link"}>See my CV <span className='mt-1'><PiBagSimpleFill /></span></Link> </li> 
             
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <Form form={form} name="contactForm" onFinish={onFinish}>
                <div id="sendmessage"></div>
                <div id="errormessage"></div>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your name!',
                    },
                  ]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'Please enter a valid email address!',
                    },
                    {
                      required: true,
                      message: 'Please enter your email address!',
                    },
                  ]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  name="subject"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter a subject!',
                    },
                  ]}
                >
                  <Input placeholder="Subject" />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your message!',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="Message" />
                </Form.Item>
                <Form.Item className=' flex  justify-center '>
                  <Button type="danger" htmlType="submit" loading={loading} className='bg-gray-600 hover:bg-gray-400 w-[20rem] text-white'>
                    Send message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
