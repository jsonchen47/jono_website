import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Account Deletion Instructions - Solid SaaS",
  description: "Step-by-step guide to deleting your account.",
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1 className="text-2xl font-bold mb-4">Account Deletion Instructions</h1>

                <p className="mb-6 text-body-color dark:text-body-color-dark">
                  Follow these steps to delete your account. <br />
                  <span className="text-red-500 font-semibold">
                    Warning: This action is permanent and will remove all your projects and images.
                  </span>
                </p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div>
                    <h2 className="text-lg font-semibold">1. Go to Your Profile</h2>
                    <p>Tap the <strong>Profile</strong> tab (👤) at the bottom right of the screen.</p>
                    <Image 
                      src="./images/deletion/profile_tab.png" 
                      alt="Profile tab" 
                      width={300} 
                      height={300} 
                      className="rounded-md shadow-md mt-2"
                    />
                  </div>

                  {/* Step 2 */}
                  <div>
                    <h2 className="text-lg font-semibold">2. Open the Menu</h2>
                    <p>On the top right, tap the <strong>menu button</strong> (☰).</p>
                    <Image 
                      src="./images/deletion/hamburger_icon.png" 
                      alt="Menu button" 
                      width={300} 
                      height={300} 
                      className="rounded-md shadow-md mt-2"
                    />
                  </div>

                  {/* Step 3 */}
                  <div>
                    <h2 className="text-lg font-semibold">3. Select "Delete Account"</h2>
                    <p>In the menu, find and tap <strong>"Delete Account."</strong></p>
                    <Image 
                      src="./images/deletion/deletion_page.png" 
                      alt="Delete Account button" 
                      width={300} 
                      height={300} 
                      className="rounded-md shadow-md mt-2"
                    />
                  </div>

                  {/* Step 4 */}
                  <div>
                    <h2 className="text-lg font-semibold">4. Confirm Deletion</h2>
                    <p>You’ll be taken to a confirmation screen. Tap <strong>"Delete Account"</strong> again to finalize.</p>
                    <Image 
                      src="./images/deletion/deletion_button.png" 
                      alt="Confirm delete account screen" 
                      width={300} 
                      height={300} 
                      className="rounded-md shadow-md mt-2"
                    />
                  </div>
                </div>

                {/* Warning Message */}
                <div className="mt-8 p-4 bg-red-100 dark:bg-red-900 rounded-md">
                  <p className="text-red-600 dark:text-red-300 font-semibold">
                    ⚠ Warning: Deleting your account will permanently remove all your projects and images. 
                    This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
