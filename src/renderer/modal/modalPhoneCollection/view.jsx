import React from 'react';
import { Modal } from 'modal/modal';
import Link from 'component/link/index';
import UserFieldNew from 'component/userFieldNew';
import UserFieldVerify from 'component/userFieldVerify';

class ModalPhoneCollection extends React.PureComponent {
  renderInner() {
    const { closeModal, phone, user } = this.props;

    const cancelButton = <Link button="text" onClick={closeModal} label={__('Not Now')} />;

    if (!user.phone_number && !phone) {
      return <UserFieldNew cancelButton={cancelButton} fieldType="phone" />;
    } else if (!user.phone_number) {
      return <UserFieldVerify cancelButton={cancelButton} fieldType="phone" />;
    }
    closeModal();
  }

  render() {
    const { user } = this.props;

    // this shouldn't happen
    if (!user) {
      return null;
    }

    return (
      <Modal type="custom" isOpen contentLabel="Phone">
        <section>
          <h3 className="modal__header">Verify Your Phone</h3>
          {this.renderInner()}
        </section>
      </Modal>
    );
  }
}

export default ModalPhoneCollection;