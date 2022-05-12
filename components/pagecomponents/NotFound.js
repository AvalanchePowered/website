import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';

const NotFound = () => {
    return (
        <>
            <div className="d-flex background-dark align-items-lg-center pt-5 pt-lg-0 text-light">

                <div className="mx-3 px-lg-3 mx-lg-5 px-lg-5">
                    <p className="display-1">404</p>
                    <p className="fw-bold h4 text-primary">The page could not be found</p>
                    <p className="text-muted">The page you were trying to access either does not exist or has moved to a new location, sorry for the inconvenience.</p>

                    <Button variant="primary" size="lg" className="fw-bold mt-3">
                        <Link href="/">
                            <span>Return to Homepage</span>
                        </Link>
                    </Button>
                </div>

            </div>
        </>
    )
}

export default NotFound;