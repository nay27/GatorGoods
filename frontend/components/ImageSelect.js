import styled from "styled-components";

const DropZone = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;

  .dropper {
    display: none;
  }
`;

class ImageSelect extends React.Component {
  dropRef = React.createRef();
  state = {
    files: [],
    urls: []
  };
  componentDidMount() {
    const div = this.dropRef.current;
    div.addEventListener("drop", this.handleDrop);
    div.addEventListener("dragin", this.handleIn);
    div.addEventListener("dragout", this.handleOut);
    div.addEventListener("dragover", this.handleDragOver);
  }
  componentWillUnmount() {
    const div = this.dropRef.current;
    div.removeEventListener("dragover", this.handleDragOver);
    div.removeEventListener("drop", this.handleDrop);
    div.removeEventListener("dragin", this.handleIn);
    div.removeEventListener("dragout", this.handleOut);
  }

  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    console.log(files);
    this.setState(prevState => {
      return { files: [...prevState.files, ...files] };
    });
    const reader = new FileReader();
    this.state.files.forEach(file => reader.readAsDataURL(file));
    reader.onload = e => {
      const url = e.target.result;
      console.log(url);
      this.setState(({ urls }) => ({ urls: [...urls, url] }));
    };
  };
  handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    // console.log(e);
  };
  handleIn = e => {
    e.preventDefault();
    e.stopPropagation();
    // console.log(e);
  };
  handleOut = e => {
    e.preventDefault();
    e.stopPropagation();
    // console.log(e);
  };

  render() {
    return (
      <label htmlFor="image">
        <DropZone ref={this.dropRef} />
        {this.state.files.map(file => (
          <p>{file.name}</p>
        ))}
        {this.state.urls.map(url => (
          <img src={url} width="100px" />
        ))}
      </label>
    );
  }
}

export default ImageSelect;
