import Layout from "@theme/Layout";
import React from "react";

import FaHdd from '@fortawesome/fontawesome-free/svgs/solid/hdd.svg';
import FaGlobe from '@fortawesome/fontawesome-free/svgs/solid/globe.svg';
import FaLock from '@fortawesome/fontawesome-free/svgs/solid/lock.svg';
import FaBrief from '@fortawesome/fontawesome-free/svgs/solid/briefcase.svg';
import FaUsers from '@fortawesome/fontawesome-free/svgs/solid/users.svg';
import FaAtlas from '@fortawesome/fontawesome-free/svgs/solid/atlas.svg';
import FaCartPlus from '@fortawesome/fontawesome-free/svgs/solid/cart-plus.svg';
import FaQuestion from '@fortawesome/fontawesome-free/svgs/solid/question.svg';
import './price.css';

export default function Pricing() {
    return (
        <Layout
            title={`DOM Cloud Hosting`}
            description="Description will go into a meta tag in <head />">
            <div className="text--center my-5">
                <h1>Pricing details</h1>
                <p>For those who grow</p>
                <p><i>Save 2 months for yearly plans!</i></p>
            </div>
            <div className="container my-5 pricing">
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card-demo shadow--md">
                            <div className="card">
                                <div className="card__header">
                                    <h3>Lite Plan</h3>
                                </div>
                                <div className="card__body">
                                    <div className="text--center">
                                        <h2 className="cap">3$</h2>
                                        <p><small>A month</small></p>
                                    </div>
                                    <div className="item">
                                        <FaHdd /> <span><b>3 GiB</b> Total Storage</span>
                                    </div>
                                    <div className="item">
                                        <FaGlobe /> <span><b>5 GiB</b> Data Network / month</span>
                                    </div>
                                    <div className="item">
                                        <FaBrief /> <span>Maximum of <b>6 instances</b></span>
                                    </div>
                                    <div className="item">
                                        <FaUsers /> <span>Team of <b>2 users</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card-demo shadow--md">
                            <div className="card">
                                <div className="card__header">
                                    <h3>Kit Plan</h3>
                                </div>
                                <div className="card__body">
                                    <div className="text--center">
                                        <h2 className="cap">10$</h2>
                                        <p><small>A month</small></p>
                                    </div>
                                    <div className="item">
                                        <FaHdd /> <span><b>10 GiB</b> Total Storage</span>
                                    </div>
                                    <div className="item">
                                        <FaGlobe /> <span><b>25 GiB</b> Data Network / month</span>
                                    </div>
                                    <div className="item">
                                        <FaBrief />  <span>Maximum of <b>10 instances</b></span>
                                    </div>
                                    <div className="item">
                                        <FaUsers />  <span>Team of <b>5 users</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card-demo shadow--md">
                            <div className="card">
                                <div className="card__header">
                                    <h3>Pro Plan</h3>
                                </div>
                                <div className="card__body">
                                    <div className="text--center">
                                        <h2 className="cap">25$</h2>
                                        <p><small>A month</small></p>
                                    </div>
                                    <div className="item">
                                        <FaHdd /> <span><b>25 GiB</b> Total Storage</span>
                                    </div>
                                    <div className="item">
                                        <FaGlobe /> <span><b>100 GiB</b> Data Network / month</span>
                                    </div>
                                    <div className="item">
                                        <FaBrief /> <span>Maximum of <b>25 instances</b></span>
                                    </div>
                                    <div className="item">
                                        <FaUsers /> <span>Team of <b>15 users</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom text--center">
                    Want to try out? No Problem! <span className="badge badge--primary">it's free</span>
                </h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon badge">
                            <FaHdd />
                        </div>
                        <h2>Free Storage</h2>
                        <p>1.5 GB of free storage for up to 3 websites.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon badge">
                            <FaGlobe />
                        </div>
                        <h2>Free Domain</h2>
                        <p>
                            Free <code>*.domcloud.io</code> domain for all your website.
                        </p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon badge">
                            <FaLock />
                        </div>
                        <h2>Free SSL</h2>
                        <p>
                            Automatically secure your website with <i>Let's Encrypt</i>.
                        </p>
                    </div>
                </div>
                <h2 className="pb-2 border-bottom text--center">
                    Benefits for subscribers!  <span className="badge badge--success">support 💚</span>
                </h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature premium col">
                        <div className="feature-icon badge">
                            <FaAtlas />
                        </div>
                        <h2>Custom Domain</h2>
                        <p>Put the website to your own domain</p>
                    </div>
                    <div className="feature premium col">
                        <div className="feature-icon badge">
                            <FaCartPlus />
                        </div>
                        <h2>Add-ons Billing</h2>
                        <p>
                            No sudden over-usage shutdowns (coming soon).
                        </p>
                    </div>
                    <div className="feature premium col">
                        <div className="feature-icon badge">
                            <FaQuestion />
                        </div>
                        <h2>Prioritized Support</h2>
                        <p>
                            We'll seriously consider your support request.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}