<script lang="ts">
    let firstName = '';
    let middleName = '';
    let lastName = '';
    let nickname = '';
    let jobTitle = '';
    let thaiFirstName = '';
    let thaiLastName = '';
    let email = '';
    let phone = '';
    let linkedInURL = '';
    let note = '';
    let lineID = '';
    let website = '';
    let reasonForContact = '';
    let availability = '';
    let subscribeToNewsletter = false;
    import '../app.css';
</script>

<div class="min-h-screen bg-custom-gradient">
    <div class="max-w-5xl mx-auto mt-auto p-5 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-5">Contact Form</h1>

        <!-- Grid Container -->
        <div class="grid grid-cols-3 gap-6 mb-6">
            <!-- First Name -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
                    First Name *
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    bind:value={firstName}
                    placeholder="Enter your first name"
                    required
                />
            </div>

            <!-- Middle Name (Optional) -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="middleName">
                    Middle Name (Optional)
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="middleName"
                    type="text"
                    bind:value={middleName}
                    placeholder="Enter your middle name"
                />
            </div>

            <!-- Last Name -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
                    Last Name *
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    bind:value={lastName}
                    placeholder="Enter your last name"
                    required
                />
            </div>

            <!-- Nickname -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="nickname">
                    Nickname *
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nickname"
                    type="text"
                    bind:value={nickname}
                    placeholder="Enter your nickname"
                    required
                />
            </div>

            <!-- Job Title -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="jobTitle">
                    Job Title *
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="jobTitle"
                    type="text"
                    bind:value={jobTitle}
                    placeholder="Enter your job title"
                    required
                />
            </div>

            <!-- Thai First Name (Optional) -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="thaiFirstName">
                    Thai First Name (Optional but recommended)
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="thaiFirstName"
                    type="text"
                    bind:value={thaiFirstName}
                    placeholder="Enter your Thai first name"
                />
            </div>

            <!-- Thai Last Name (Optional) -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="thaiLastName">
                    Thai Last Name (Optional but recommended)
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="thaiLastName"
                    type="text"
                    bind:value={thaiLastName}
                    placeholder="Enter your Thai last name"
                />
            </div>

            <!-- Email -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email *
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    bind:value={email}
                    placeholder="Enter your email"
                    required
                />
            </div>

            <!-- Phone -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                    Phone * (Format: +66XXXXXXXXX)
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    bind:value={phone}
                    placeholder="Enter your phone number"
                    pattern="^\+66\d{9}$"
                    required
                />
            </div>

            <!-- LinkedIn URL (Optional) -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="linkedInURL">
                    LinkedIn URL (Optional but recommended)
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="linkedInURL"
                    type="url"
                    bind:value={linkedInURL}
                    placeholder="Enter your LinkedIn profile URL"
                />
            </div>

            <!-- Line ID -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="lineID">
                    Line ID *
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lineID"
                    type="text"
                    bind:value={lineID}
                    placeholder="Enter your Line ID"
                    required
                />
            </div>

            <!-- Website (Optional) -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="website">
                    Website (Optional but recommended)
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="website"
                    type="url"
                    bind:value={website}
                    placeholder="Enter your website URL"
                />
            </div>

            <!-- Note (Optional) -->
            <div class="mb-4 col-span-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="note">
                    Note (Optional but recommended)
                </label>
                <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="note"
                    rows="4"
                    bind:value={note}
                    placeholder="Enter additional notes"
                ></textarea>
            </div>

            <!-- Reason for Contact -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="reasonForContact">
                    Reason for Contact
                </label>
                <select
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="reasonForContact"
                    bind:value={reasonForContact}
                >
                    <option value="" disabled selected>Select a reason</option>
                    <option value="Support">Support</option>
                    <option value="Sales">Sales</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <!-- Availability -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="availability">
                    Availability
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="availability"
                    type="date"
                    bind:value={availability}
                />
            </div>

            <!-- Subscribe to Newsletter -->
            <div class="mb-4 col-span-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="subscribeToNewsletter">
                    Subscribe to Newsletter
                </label>
                <div class="flex items-center">
                    <input
                        class="mr-2 leading-tight"
                        type="checkbox"
                        id="subscribeToNewsletter"
                        bind:checked={subscribeToNewsletter}
                    />
                    <label for="subscribeToNewsletter" class="text-gray-700">Yes, I want to receive updates</label>
                </div>
            </div>
        </div>

        <!-- Submit Button -->
        <div class="flex items-center justify-between">
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                on:click={() => alert('Form submitted!')}
            >
                Submit
            </button>
        </div>
    </div>
</div>

<style>
    /* Custom Styles (if any) can go here */
</style>


