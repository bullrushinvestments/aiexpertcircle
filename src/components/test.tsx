import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface TestFormInputs {
  question: string;
  answer: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = (data) => {
    setLoading(true);
    setError(null); // Reset error if user tries again

    try {
      // Simulate API call
      console.log('Sending data to server:', data);

      // After successful submission, reset form and clear errors
      reset();
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Write Test Questions</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label htmlFor="question" className="block mb-1">Question</label>
          <input
            id="question"
            type="text"
            placeholder="Enter question here..."
            {...register('question', { required: 'This field is required' })}
            className={twMerge("w-full px-3 py-2 border rounded-lg", errors.question && "border-red-500")}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="answer" className="block mb-1">Answer</label>
          <input
            id="answer"
            type="text"
            placeholder="Enter answer here..."
            {...register('answer', { required: 'This field is required' })}
            className={twMerge("w-full px-3 py-2 border rounded-lg", errors.answer && "border-red-500")}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={twMerge(
            "w-full bg-blue-500 text-white font-bold py-2 px-4 rounded",
            loading ? "opacity-70 cursor-not-allowed" : ""
          )}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface TestFormInputs {
  question: string;
  answer: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = (data) => {
    setLoading(true);
    setError(null); // Reset error if user tries again

    try {
      // Simulate API call
      console.log('Sending data to server:', data);

      // After successful submission, reset form and clear errors
      reset();
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Write Test Questions</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label htmlFor="question" className="block mb-1">Question</label>
          <input
            id="question"
            type="text"
            placeholder="Enter question here..."
            {...register('question', { required: 'This field is required' })}
            className={twMerge("w-full px-3 py-2 border rounded-lg", errors.question && "border-red-500")}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="answer" className="block mb-1">Answer</label>
          <input
            id="answer"
            type="text"
            placeholder="Enter answer here..."
            {...register('answer', { required: 'This field is required' })}
            className={twMerge("w-full px-3 py-2 border rounded-lg", errors.answer && "border-red-500")}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={twMerge(
            "w-full bg-blue-500 text-white font-bold py-2 px-4 rounded",
            loading ? "opacity-70 cursor-not-allowed" : ""
          )}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;