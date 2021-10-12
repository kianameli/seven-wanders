import SignUpForm from "../../components/SignUpForm/SignUpForm"
import Layout from "../../components/Layout/Layout"

export default function SignUp(props) {
  return (
    <Layout user={ props.user }>
    <div>
    <SignUpForm/>
    </div>
    </Layout>
  )
}
