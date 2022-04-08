"""empty message

Revision ID: d162dd48f1da
Revises: 2807edd385a2
Create Date: 2022-03-28 18:10:55.612243

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd162dd48f1da'
down_revision = '2807edd385a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('site',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('place_name', sa.String(length=200), nullable=False),
    sa.Column('url_site', sa.String(length=1000), nullable=False),
    sa.Column('city', sa.String(length=150), nullable=False),
    sa.Column('description', sa.String(length=1000), nullable=False),
    sa.Column('location', sa.String(length=200), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('site')
    # ### end Alembic commands ###
