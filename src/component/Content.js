import { useState, useRef } from "react";


const Content = (props) => {


    const inputName = useRef()
    const inputKeyword = useRef()
    const inputSummary = useRef()

    const [name, setName] = useState('')
    const [keyword, setKeyword] = useState('')
    const [summary, setSummary] = useState('')
    const [websites, setWebsites] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newName = inputName.current.value
        const newKeyword = inputKeyword.current.value
        const newSummary = inputSummary.current.value
        if (newName.length >= 0) {
            setName(newName);
        }
        if (newSummary.length >= 0) {
            setSummary(newSummary);
        }
    }
    return (
        <>
            <div className="body_head d-flex align-items-center justify-content-between">

                <h1 className="d-flex justify-content-start">{name.length > 0 ? name : 'Gembucket'}</h1>
                <i type="button" data-toggle="modal" data-target="#exampleModalLong" className="fa-solid fa-pen d-flex justify-content-end"></i>
            </div>

            <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog  modal-lg" role="document">
                    <div className="modal-content" style={{ backgroundColor: '#F3F3F3' }} >
                        <div className="modal-header border-0">
                            <p className="modal-title" id="exampleModalLongTitle">Project</p>

                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-2">
                                    <div className="d-flex align-items-center "><label placeholder="Gembucket"
                                        for="exampleInputEmail1" className="form-label">Name</label>
                                        <div style={{ color: '#18C4EE', fontSize: '32px' }} >*</div>
                                    </div>

                                    <input type="keyword" className="form-control" id="exampleInputKeyword"
                                        aria-describedby="keywordHelp"
                                        // onChange={(e) => {
                                        //     setName(e.target.value)
                                        // }}
                                        ref={inputName}
                                    />


                                </div>
                                <div className="mb-2">
                                    <label for="exampleInputPassword1" className="form-label">Keyword</label>
                                    <input ref={inputKeyword} type="text" className="form-control" id="exampleInputPassword1" />

                                    <ul className="list_select d-flex">
                                        <li style={{ listsStyle: 'none' }} className="d-flex ">
                                            <div>#solar_breeze</div>
                                            <div style={{ color: 'red' }}>x</div>
                                        </li>
                                        <li style={{ listStyle: 'none' }} className="d-flex">
                                            <div>#red_hold</div>
                                            <div style={{ color: 'red' }}>x</div>
                                        </li>
                                        <li style={{ listStyle: 'none' }} className="d-flex">
                                            <div>#card_guard</div>
                                            <div style={{ color: 'red' }}>x</div>
                                        </li>
                                        <li style={{ listStyle: 'none' }} className="d-flex">
                                            <div>#lotstring</div>
                                            <div style={{ color: 'red' }}>x</div>
                                        </li>
                                        <li style={{ listStyle: 'none' }} className="d-flex">
                                            <div>#tough_joy_fax</div>
                                            <div style={{ color: 'red' }}>x</div>
                                        </li>
                                        <li style={{ listStyle: 'none' }} className="d-flex">
                                            <div>#cardify</div>
                                            <div style={{ color: 'red' }}>x</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-2">
                                    <div className="d-flex align-items-center "><label placeholder="Gembucket"
                                        for="exampleInputEmail1" className="form-label">Summary</label>
                                        <div style={{
                                            color: '#18C4EE',
                                            fontSize: 32
                                        }}>*</div>

                                    </div>
                                    <textarea name="tweet" id="textbox" className="form-control" rows="4" cols="1"
                                        ref={inputName} maxlength="250"></textarea>
                                    <span id="char_count">250/250</span>
                                </div>
                                <div className="mb-2">
                                    <label for="web" className="form-label">Websites</label>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <input type="web" className="form-control" id="websites"
                                                aria-describedby="emailHelp" />
                                        </div>
                                        <div className="dropdown col-lg-2">
                                            <a className="btn btn-secondary dropdown-toggle" href="https://github.com" role="button"
                                                id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Official site
                                            </a>

                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a className="dropdown-item" href="https://github.com">Action</a></li>
                                                <li><a className="dropdown-item" href="https://github.com">Another action</a></li>
                                                <li><a className="dropdown-item" href="https://github.com">Something else here</a></li>
                                            </ul>
                                        </div>
                                        <div className="remove col-lg-1">Remove</div>


                                    </div>
                                    <div className="add-web">Add another website</div>

                                </div>

                            </form>
                        </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}

                            >Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hastag" style={{ color: '#8FADB5', fontWeight: 700, fontSize: 14 }}>
                #solar_breeze&nbsp;&nbsp;#red_hold&nbsp;&nbsp;#card_guard&nbsp;&nbsp;#lotstring&nbsp;&nbsp;#tough_joy_fax&nbsp;&nbsp;#cardify
            </div>

            <p className="header-text" style={{ color: '#808080' }}>
                Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus

                aliquet at neque
                aenean
                auctor gravida sem
                praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio feugiat non pretium quis
                lectus
                suspendisse.</p>
            <div className="official">
                <div style={{ color: '#808080' }}>Official site:&nbsp;&nbsp;</div>
                <a href="https://gembucket.com">https://gembucket.com</a>
            </div>
        </>
    )
}
export default Content