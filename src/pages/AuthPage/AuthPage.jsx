import { Button, Label, TextInput } from "flowbite-react";
import { useAuthForm } from "../../hooks/useAuthForm";

export const AuthPage = () => {
  const { form, error, isProcessing } = useAuthForm();

  return (
    <div className=' grid place-items-center h-full'>
      <form
        className=' grid grid-flow-row gap-3 w-72'
        onSubmitCapture={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <Label className='place-self-center text-lg mb-5' value='My Meeting' />
        <form.Field
          name='login'
          children={(field) => {
            return (
              <TextInput
                id={field.name}
                value={field.state.value}
                placeholder={"Login"}
                color={error ? "failure" : ""}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            );
          }}
        />
        <form.Field
          name='password'
          children={(field) => (
            <TextInput
              id={field.name}
              value={field.state.value}
              placeholder={"Password"}
              type='password'
              color={error ? "failure" : ""}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              className='mt-2 rounded-sm'
              color='light'
              type='submit'
              disabled={!canSubmit}
              isProcessing={isProcessing}
            >
              {isSubmitting ? "..." : "Login"}
            </Button>
          )}
        />
      </form>
    </div>
  );
};
