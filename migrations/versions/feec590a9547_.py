"""empty message

Revision ID: feec590a9547
Revises: 64765fdccaa8
Create Date: 2022-03-28 19:02:39.535486

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'feec590a9547'
down_revision = '64765fdccaa8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('site', sa.Column('url_image', sa.String(length=1000), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('site', 'url_image')
    # ### end Alembic commands ###
