<template>
    <div class="contact">
        <navbar />
        <div class="wrap">
            <div class="bott-tri"></div>
            <div class="top-tri"></div>
            <h2>Any Question?</h2>
            <div class="box">
                <div class="small-contact">
                    <h2>Contact Us</h2>
                    <p>
                        Fill up the form and our team will get back to you within 24 hours
                    </p>
                    <p class="icon">
                        <i class="far fa-envelope fa-fw"></i>&nbsp;glorydev@gmail.com
                    </p>
                    <p class="icon">
                        <i class="fab fa-whatsapp fa-fw"></i>&nbsp;0838-9593-6423
                    </p>
                    <p class="icon">
                        <i class="fab fa-instagram fa-fw"></i>&nbsp;GloryDev.Team
                    </p>
                </div>
                <div class="big-contact">
                    <form action="">
                        <div class="row">
                            <div class="col-lg-12">
                                <label for="">Full Name</label>
                                <input type="text" placeholder="Type your full name" autocomplete="off" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <label for="">Email</label>
                                <input type="text" placeholder="Type your email" autocomplete="off" />
                            </div>
                            <div class="col-lg-6">
                                <label for="">Phone Number</label>
                                <input type="text" placeholder="Type your phone number" autocomplete="off" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="">Message</label>
                            <textarea placeholder="Write Your Message"></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navbar from "@/components/Navbar.vue";

    export default {
        name: "Contact",
        components: {
            navbar,
        },
    };
</script>

<style scoped>
    @import url("../assets/contact-style.css");
</style>