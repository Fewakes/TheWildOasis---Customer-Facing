import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <div className="space-y-8">
      {/* Welcome Message */}
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, {firstName}
      </h2>

      {/* Info Panel */}
      <div className="text-primary-200">
        <p className="text-lg">
          Welcome to your guest dashboard, {firstName}. From here you can manage
          your bookings, update your personal details, and get ready for your
          next stay in our luxury cabins.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="bg-primary-800 text-primary-100 p-6 rounded-xl shadow mt-12">
        <h3 className="text-2xl font-semibold mb-4">
          What Our Guests Are Saying
        </h3>

        <div className="space-y-6">
          {/* Testimonial 1 */}
          <div className="space-y-2">
            <p className="italic">
              "An unforgettable experience! The cabin was cozy, the staff was
              welcoming, and the view was breathtaking. Highly recommend!"
            </p>
            <p className="font-semibold">- Jane D.</p>
          </div>

          {/* Testimonial 2 */}
          <div className="space-y-2">
            <p className="italic">
              "A perfect getaway! Everything was just as promised, and the
              tranquility was exactly what we needed."
            </p>
            <p className="font-semibold">- John S.</p>
          </div>

          {/* Testimonial 3 */}
          <div className="space-y-2">
            <p className="italic">
              "The best vacation I've had in years! The cabin was spotless, the
              amenities were top-notch, and the surroundings were peaceful."
            </p>
            <p className="font-semibold">- Sarah L.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
