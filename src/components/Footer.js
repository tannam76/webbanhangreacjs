import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from 'mdb-react-ui-kit';
import React from 'react';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-white text-center text-lg-start'>
      <MDBContainer className='p-4'>
        <MDBRow>
          {/* Cột Logo và giới thiệu */}
          <MDBCol lg="4" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>
              <MDBIcon fas icon="rocket" className="me-2" />
              My Website
            </h5>
            <p>
              Khám phá những thông tin hữu ích, dịch vụ hàng đầu và trải nghiệm không giới hạn.
            </p>
            <div>
              <MDBIcon fab icon="facebook" className="me-3 text-white" />
              <MDBIcon fab icon="twitter" className="me-3 text-white" />
              <MDBIcon fab icon="instagram" className="me-3 text-white" />
              <MDBIcon fab icon="linkedin" className="text-white" />
            </div>
          </MDBCol>

          {/* Cột Links */}
          <MDBCol lg="4" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Liên kết nhanh</h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Trang chủ
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Liên hệ
                </a>
              </li>
            </ul>
          </MDBCol>

          {/* Cột Newsletter */}
          <MDBCol lg="4" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Đăng ký nhận tin</h5>
            <p>Nhận thông báo và ưu đãi mới nhất từ chúng tôi.</p>
            <form>
              <div className='d-flex'>
                <input
                  type='email'
                  className='form-control me-2'
                  placeholder='Email của bạn'
                />
                <button type='submit' className='btn btn-primary'>
                  Đăng ký
                </button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Bản quyền thuộc về: 
        <a className='text-white ms-1' href='https://hethongcode.com/'>
          HTCD
        </a>
      </div>
    </MDBFooter>
  );
}
