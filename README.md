# KYC Form Application

This is a multi-step KYC (Know Your Customer) form application built with **React, TypeScript, TailwindCSS, and Zod**. Users can fill out their personal information, upload documents, and preview their submission in a seamless flow.

## 📦 Features

- **Multi-step Form**: Three-step form process for better user experience
- **Form Validation**: Comprehensive form validation using Zod
- **File Upload**: Support for multiple file uploads with size limits
- **Responsive Design**: Mobile-first UI that works on all devices
- **Type Safety**: Built with TypeScript for better code quality

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **Language**: TypeScript
- **UI Library**: TailwindCSS
- **Form Management**: React Hook Form
- **Validation**: Zod
- **Package Manager**: pnpm

## Demo site

[https://me.josh.com.tw/zerologix-assignment](https://me.josh.com.tw/zerologix-assignment)

## 🚀 Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/iskWang/zerologix-assignment.git
cd zerologix-assignment
```

### 2️⃣ Install Dependencies

```sh
pnpm install
```

### 3️⃣ Start Development Server

```sh
pnpm dev
```

### 4️⃣ Build for Production

```sh
pnpm build
```

### 5️⃣ Start Production Server

```sh
pnpm preview
```

## 📂 Project Structure

```
📦 src/
 ┣ 📂 Component/        # Reusable UI Components
 ┃ ┣ 📂 Button/         # Button Component
 ┃ ┣ 📂 DatePicker/     # Date Picker Component
 ┃ ┣ 📂 FileUpload/     # File Upload Component
 ┃ ┣ 📂 Input/          # Input Component
 ┃ ┣ 📂 Select/         # Select Component
 ┃ ┗ 📂 StepIndicator/  # Step Indicator Component
 ┣ 📂 Container/        # Container Components
 ┃ ┗ 📂 KYCFormContainer/# KYC Form Container
 ┣ 📂 Presentation/     # Presentation Components
 ┃ ┣ 📂 Step1/          # Basic Info Form
 ┃ ┣ 📂 Step2/          # Document Upload Form
 ┃ ┗ 📂 Step3/          # Preview Form
 ┣ 📂 Scene/            # Scene Components
 ┃ ┣ 📂 Step1/          # Basic Info Scene
 ┃ ┣ 📂 Step2/          # Document Upload Scene
 ┃ ┗ 📂 Step3/          # Preview Scene
 ┣ 📂 Lib/              # Utilities and Constants
 ┣ 📜 App.tsx           # Main Application Component
 ┣ 📜 index.css         # TailwindCSS Styles
 ┣ 📜 main.tsx          # React App Entry Point
 ┗ 📜 vite.config.ts    # Vite Configuration
```

## 🏗 Architecture

The application follows a clear separation of concerns with the following structure:

- **Components**: Reusable UI components
- **Containers**: State management and business logic
- **Presentations**: Page-specific UI components
- **Scenes**: Top-level route components

## 📝 Key Features

- **Form Validation**

  - Age validation (18-85 years)
  - Required fields validation
  - Email and phone number format validation

- **File Upload**

  - ID Card front/back (5MB limit each)
  - Multiple additional documents (10MB total limit)
  - File type validation

- **User Experience**
  - Step indicator for progress tracking
  - Responsive design for all devices
  - Clear error messages
  - Preview before submission

## 📜 License

MIT License
