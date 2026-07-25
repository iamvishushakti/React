function Contact() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Me</h1>
        <p className="text-muted">
          Have a project in mind or just want to say hello? Feel free to reach
          out.
        </p>
      </div>

      <div className="row g-4">
        {/* Contact Information */}
        <div className="col-lg-5">
          <div className="card shadow h-100">
            <div className="card-body">
              <h3 className="mb-4">Contact Information</h3>

              <p>
                <strong>👤 Name:</strong> Vishal Kumar
              </p>

              <p>
                <strong>📧 Email:</strong> vishal@example.com
              </p>

              <p>
                <strong>📱 Phone:</strong> +91 98765 43210
              </p>

              <p>
                <strong>📍 Location:</strong> Patiala, Punjab, India
              </p>

              <p>
                <strong>💼 Profession:</strong> Software Developer
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="mb-4">Send Message</h3>

              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;