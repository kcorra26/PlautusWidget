import 'bootstrap-icons/font/bootstrap-icons.css';

export default function About() {
    return (
        <div>
            <h3 className="m-5">About</h3>
            <p className="lead row justify-content-center">
                The Plautus Line Converter is part of a project to improve <br />
                the usability and documentation of ΛΟΓΕΙΟΝ (Logeion), a <br />
                free online dictionary that aggregates the resources of all <br />
                the Latin and Greek dictionaries available through the Perseus <br />
                Classical collection in addition to other resources like the <br />
                Dictionary of Medieval Latin from British Sources. The Converter<br />
                was built for students and researchers whose Plautus editions <br />
                may not contain strict line numbers, to allow easy lookups with<br />
                the changes in Logeion. <br />
                <br />
                Full project with XML integration can be found on Github. 
            </p>

            <a href="https://github.com/kcorra26/LewisShortLogeion">
                <h3><i class="bi bi-github" style={{ fontSize: '35px' }}></i></h3>
            </a>

        </div>

        
    )
}